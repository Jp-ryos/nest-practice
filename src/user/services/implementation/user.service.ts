import { Inject, Injectable } from '@nestjs/common';
import { ErrorHandler, _privateId_ErrorHandler } from 'src/common/services/error/Errorhandler';
import { TimeProvider, _privateId_timeProvider } from 'src/common/services/TimeProvider';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';
import { SearchUserResponseV1 } from 'src/user/models/response/friend-searchresponse.model';
import { SearchUserResponseDetailV1 } from 'src/user/models/response/user-searchresponsedetail.model';
import { DeleteUserService, GetUserService, SearchUserService, UpdateUserService } from '../user-service.interface';

@Injectable()
export class DefaultSearchUserService implements SearchUserService {

  constructor(@Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider) { }

  searchUser(userId: string): SearchUserResponseDetailV1 {
    return null;
  }

}

@Injectable()
export class DefaultUpdateUserService implements UpdateUserService {

  constructor(
    @Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider,
    @Inject(_privateId_ErrorHandler) private readonly errorHandler: ErrorHandler) { }

  updateUser(userId: string, updateUserDto: UpdateUserDto): SearchUserResponseDetailV1 {
    let request: UpdateUserRequestV1 = updateUserDto.request;

    // 更新内容が存在しない場合はエラー
    if (!request.emailAddress && !request.userName) {
      throw this.errorHandler.raiseBadRequestException(
        'CCDU002001',
        'メールアドレスかユーザ名のどちらかを指定してください',
        this.timeProvider.currentDateTime());
    }
    return null;
  }
}

@Injectable()
export class DefaultDeleteUserService implements DeleteUserService {

  constructor(@Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider) { }

  deleteUser(userId: string): SearchUserResponseDetailV1 {
    return null;
  }
}

@Injectable()
export class DefaultGetUserService implements GetUserService {

  constructor(@Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider) { }

  getUser(userId: string, userCode: string, userType: UserType): SearchUserResponseV1 {
    return null;
  }
}