import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/implementation/user.controller';
import {
  DefaultDeleteUserService,
  DefaultGetUserService,
  DefaultSearchUserService,
  DefaultUpdateUserService,
} from 'src/services/implementation/user.service';
import {
  _privateId_DeleteUserService,
  _privateId_GetUserService,
  _privateId_SearchUserService,
  _privateId_UpdateUserService
} from 'src/services/user-service.interface';




@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      useClass: DefaultSearchUserService,
      provide: _privateId_SearchUserService
    },
    {
      useClass: DefaultUpdateUserService,
      provide: _privateId_UpdateUserService
    },
    {
      useClass: DefaultDeleteUserService,
      provide: _privateId_DeleteUserService
    },
    {
      useClass: DefaultGetUserService,
      provide: _privateId_GetUserService
    }
  ],
})
export class UserModule { }