import { Module } from '@nestjs/common';
import { ErrorHandler, _privateId_ErrorHandler } from 'src/common/services/error/Errorhandler';
import { TimeProvider, _privateId_timeProvider } from 'src/common/services/TimeProvider';
import { UserController } from 'src/user/controllers/implementation/user.controller';
import {
  DefaultDeleteUserService,
  DefaultGetUserService,
  DefaultSearchUserService,
  DefaultUpdateUserService,
} from 'src/user/services/implementation/user.service';
import {
  _privateId_DeleteUserService,
  _privateId_GetUserService,
  _privateId_SearchUserService,
  _privateId_UpdateUserService
} from 'src/user/services/user-service.interface';




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
    },
    {
      useClass: TimeProvider,
      provide: _privateId_timeProvider
    },
    {
      useClass: ErrorHandler,
      provide: _privateId_ErrorHandler
    }
  ],
})
export class UserModule { }