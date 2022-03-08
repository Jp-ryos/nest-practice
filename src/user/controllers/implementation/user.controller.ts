import { Body, Controller, Delete, Get, Inject, InternalServerErrorException, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';
import { UserControllerInterface } from '../user-controller.interface';

import {
  CreateUserService,
  DeleteUserService,
  GetUserService,
  SearchUserService,
  UpdateUserService,
  _privateId_CreateUserService,
  _privateId_DeleteUserService,
  _privateId_GetUserService,
  _privateId_SearchUserService,
  _privateId_UpdateUserService
} from 'src/user/services/user-service.interface';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { SearchUserResponseDetailV1 } from 'src/user/models/response/user-searchresponsedetail.model';
import { SearchUserResponseV1 } from 'src/user/models/response/friend-searchresponse.model';
import { CreateUserRequestV1 } from 'src/user/models/request/user-createrequest.model';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { TimeProvider, _privateId_timeProvider } from 'src/common/services/TimeProvider';
import { ErrorHandler, _privateId_ErrorHandler } from 'src/common/services/error/Errorhandler';

@Controller('/users')
export class UserController implements UserControllerInterface {
  constructor(
    @Inject(_privateId_GetUserService) private readonly _getUserService: GetUserService,
    @Inject(_privateId_CreateUserService) private readonly _createUserService: CreateUserService,
    @Inject(_privateId_SearchUserService) private readonly _searchUserService: SearchUserService,
    @Inject(_privateId_UpdateUserService) private readonly _updateUserService: UpdateUserService,
    @Inject(_privateId_DeleteUserService) private readonly _deleteUserService: DeleteUserService,
    @Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider,
    @Inject(_privateId_ErrorHandler) private readonly errorHandler: ErrorHandler
  ) { }

  @Get()
  async getUser(@Query('userCode') userCode: string, @Query('userType') userType: UserType): Promise<SearchUserResponseV1> {
    try {
      return await this._getUserService.getUser(userCode, userType);
    } catch (e) {
      throw new InternalServerErrorException(e);
    }
  }

  @Post()
  async createUser(@Body() createUserRequest: CreateUserRequestV1): Promise<SearchUserResponseDetailV1> {
    let dto: CreateUserDto = new CreateUserDto(createUserRequest);
    dto.request = createUserRequest;
    try {
      dto = await this._createUserService.createUser(dto);
    } catch (e) {
      console.log(e);
      throw this.errorHandler.raiseBadRequestException('CCDU002002', 'ユーザコードが重複しています', this.timeProvider.currentDateTime());
    }
    return dto.response;
  }

  @Get(':userId')
  async searchUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<SearchUserResponseDetailV1> {
    try {
      return await this._searchUserService.searchUser(userId);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e);
    }
  }

  @Patch(':userId')
  async updateUser(@Param('userId', ParseUUIDPipe) userId: string, @Body() updateUserRequestV1: UpdateUserRequestV1): Promise<SearchUserResponseDetailV1> {
    let dto: UpdateUserDto = new UpdateUserDto(updateUserRequestV1);

    try {
      dto = await this._updateUserService.updateUser(userId, dto);
      return dto.response;
    } catch (e) {
      throw e;
    }
  }

  @Delete(':userId')
  async deleteUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<void> {
    try {
      return await this._deleteUserService.deleteUser(userId);
    } catch (e) {
      throw e;
    }
  }
}
