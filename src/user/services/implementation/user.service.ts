import { Inject, Injectable } from '@nestjs/common';
import { Common } from 'src/common/entities/common.entity';
import { ErrorHandler, _privateId_ErrorHandler } from 'src/common/services/error/Errorhandler';
import { TimeProvider, _privateId_timeProvider } from 'src/common/services/TimeProvider';
import { FALSE } from 'src/common/utils/Flag';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { User } from 'src/user/entities/user.entity';
import { CreateUserRequestV1 } from 'src/user/models/request/user-createrequest.model';
import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';
import { SearchUserResponseV1 } from 'src/user/models/response/friend-searchresponse.model';
import { SearchUserResponseDetailV1 } from 'src/user/models/response/user-searchresponsedetail.model';
import { UserRepository } from 'src/user/repository/user.repository';
import { CreateUserService, DeleteUserService, GetUserService, SearchUserService, UpdateUserService } from '../user-service.interface';
import { createDetailResponse, createResponse } from '../../util/user-objectbuilder';

@Injectable()
export class DefaultGetUserService implements GetUserService {

  constructor(
    private readonly userRepository: UserRepository,
    @Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider) { }

  async getUser(userCode: string, userType: UserType): Promise<SearchUserResponseV1> {
    let entities: User[] = [];
    try {
      entities = await this.userRepository.getUser(userCode, userType);
      return createResponse(entities);
    } catch (e) {
      console.error(e);
      throw new Error(`failed get user`);
    }
  }
}

@Injectable()
export class DefaultCreateUserService implements CreateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    @Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider,
    @Inject(_privateId_ErrorHandler) private readonly errorHandler: ErrorHandler) { }

  async createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {

    try {
      // ユーザ登録処理
      createUserDto = await this.#createUser(createUserDto);
    } catch (e) {
      console.log(e);
      throw e;
    }

    // レスポンス作成処理
    createUserDto = this.#createResponse(createUserDto);

    return createUserDto;
  }

  async #createUser(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    createUserDto.user = new User();

    this.#createUserEntity(createUserDto);
    this.#createCommonEntity(createUserDto);

    try {
      let registeredUser: User = await this.userRepository.createUser(createUserDto);
      createUserDto.user = registeredUser;

    } catch (e) {
      throw e;
    }
    return createUserDto;
  }


  #createResponse(createUserDto: CreateUserDto): CreateUserDto {
    let user: User = createUserDto.user;
    createUserDto.response = createDetailResponse(createUserDto.user);
    return createUserDto;

  }


  #createUserEntity(createUserDto: CreateUserDto): void {
    let request: CreateUserRequestV1 = createUserDto.request;
    let entity: User = createUserDto.user;

    entity.email_address = request.emailAddress;
    entity.user_name = request.userName;
    entity.password = request.password;
    entity.user_code = request.userCode;

    entity.user_type = '1';
    entity.email_address_activation_flag = FALSE;
    entity.ignore_access_flag = FALSE;
    entity.friend_code = this.#createFriendCode();

    createUserDto.user = entity;
  }

  #createCommonEntity(createUserDto: CreateUserDto): void {
    let entity: User = createUserDto.user;
    let dateTime: string = this.timeProvider.currentDateTime();
    entity.common = new Common();
    entity.common._create_date_time = dateTime;
    entity.common._update_date_time = dateTime;
    entity.common._delete_flag = FALSE;
    entity.common._create_user_name = entity.user_code;
    entity.common._update_user_name = entity.user_code;

  }

  #createFriendCode(): string {
    let result: string = '';

    for (let i: number = 0; i < 12; i++) {
      result += Math.floor(Math.random() * 10).toString();
    }
    return result;
  }

}
@Injectable()
export class DefaultSearchUserService implements SearchUserService {

  constructor(
    private readonly userRepository: UserRepository,
    @Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider) { }

  async searchUser(userId: string): Promise<SearchUserResponseDetailV1> {
    try {
      let user: User = await this.userRepository.seatchUser(userId);
      return createDetailResponse(user);
    } catch (e) {
      throw e;
    }
  }
}

@Injectable()
export class DefaultUpdateUserService implements UpdateUserService {

  constructor(
    private readonly userRepository: UserRepository,
    @Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider,
    @Inject(_privateId_ErrorHandler) private readonly errorHandler: ErrorHandler) { }

  async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    let request: UpdateUserRequestV1 = updateUserDto.request;

    try {
      updateUserDto.user = await this.userRepository.seatchUser(userId);
      if (updateUserDto.user === undefined || updateUserDto.user === null) {
        throw this.errorHandler.raiseBadRequestException(
          'CCDU002003',
          'ユーザが存在しません',
          this.timeProvider.currentDateTime());
      }

      // 更新内容が存在しない場合はエラー
      if (!request.emailAddress && !request.userName) {
        throw this.errorHandler.raiseBadRequestException(
          'CCDU002001',
          'メールアドレスかユーザ名のどちらかを指定してください',
          this.timeProvider.currentDateTime());
      }

      if (request.emailAddress === updateUserDto.user.email_address &&
        request.userName === updateUserDto.user.user_name) {
        console.log("更新内容はありません");
      } else {
        if (request.emailAddress) {
          updateUserDto.user.email_address = request.emailAddress;
        }
        if (request.userName) {
          updateUserDto.user.user_name = request.userName;
        }

        updateUserDto.user.common._update_date_time = this.timeProvider.currentDateTime();
        updateUserDto.user = await this.userRepository.updateUser(updateUserDto.user);
      }

      updateUserDto.response = createDetailResponse(updateUserDto.user);
      return updateUserDto;
    } catch (e) {
      throw e;
    }
  }
}

@Injectable()
export class DefaultDeleteUserService implements DeleteUserService {

  constructor(
    private readonly userRepository: UserRepository,
    @Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider,
    @Inject(_privateId_ErrorHandler) private readonly errorHandler: ErrorHandler) { }

  async deleteUser(userId: string): Promise<void> {

    try {
      let user: User = await this.userRepository.seatchUser(userId);
      if (user === undefined || user === null) {
        throw this.errorHandler.raiseBadRequestException(
          'CCDU002003',
          'ユーザが存在しません',
          this.timeProvider.currentDateTime());
      }
      user = await this.userRepository.deleteUser(user);
      return;

    } catch (e) {
      throw e;
    }

  }
}