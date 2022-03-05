import { Body, Controller, Delete, Get, Inject, Param, Patch, Query } from '@nestjs/common';
import { SearchUserResponseDetailV1 } from 'src/models/SearchUserResponseDetailV1';
import { SearchUserResponseV1 } from 'src/models/SearchUserResponseV1';
import { UpdateUserRequestV1 } from 'src/models/UpdateUserRequestV1';
import { UserControllerInterface } from '../user-controller.interface';

import {
  DeleteUserService,
  GetUserService,
  SearchUserService,
  UpdateUserService,
  _privateId_DeleteUserService,
  _privateId_GetUserService,
  _privateId_SearchUserService,
  _privateId_UpdateUserService
} from 'src/services/user-service.interface';

@Controller('/users')
export class UserController implements UserControllerInterface {
  constructor(
    @Inject(_privateId_SearchUserService) private readonly _searchUserService: SearchUserService,
    @Inject(_privateId_UpdateUserService) private readonly _updateUserService: UpdateUserService,
    @Inject(_privateId_DeleteUserService) private readonly _deleteUserService: DeleteUserService,
    @Inject(_privateId_GetUserService) private readonly _getUserService: GetUserService,
  ) { }

  @Get(':userId')
  searchUser(@Param('userId') userId: string): SearchUserResponseDetailV1 {
    return this._searchUserService.searchUser(userId);
  }

  @Patch(':userId')
  updateUser(@Param('userId') userId: string, @Body() updateUserRequestV1: UpdateUserRequestV1): SearchUserResponseDetailV1 {
    return this._updateUserService.updateUser(userId, updateUserRequestV1);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    return this._deleteUserService.deleteUser(userId);
  }

  @Get()
  getUser(@Query('userId') userId: string, @Query('userCode') userCode: string, @Query('userType') userType: UserType): SearchUserResponseV1 {
    return this._getUserService.getUser(userId, userCode, userType);
  }


}
