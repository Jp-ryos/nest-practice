import { Injectable } from '@nestjs/common';
import { CommonResponseBase } from 'src/models/CommonResponseBase';
import { SearchUserResponseDetailV1 } from 'src/models/SearchUserResponseDetailV1';
import { SearchUserResponseFriendDetailV1 } from 'src/models/SearchUserResponseFriendDetailV1';
import { SearchUserResponseV1 } from 'src/models/SearchUserResponseV1';
import { UpdateUserRequestV1 } from 'src/models/UpdateUserRequestV1';
import { DeleteUserService, GetUserService, SearchUserService, UpdateUserService } from '../user-service.interface';

@Injectable()
export class DefaultSearchUserService implements SearchUserService {
  privateId_SearchUserService: string = '64c92b1b-557c-4500-bb80-b8d23b6c432e';

  searchUser(userId: string): SearchUserResponseDetailV1 {
    let friendDetail: SearchUserResponseFriendDetailV1 = new SearchUserResponseFriendDetailV1();
    let userDetail: SearchUserResponseDetailV1 = new SearchUserResponseDetailV1();
    userDetail.userId = userId;
    userDetail.friendDetail = Array.of(friendDetail);

    return userDetail;
  }

}

@Injectable()
export class DefaultUpdateUserService implements UpdateUserService {

  updateUser(userId: string, updateUserRequestV1: UpdateUserRequestV1): SearchUserResponseDetailV1 {
    let friendDetail: SearchUserResponseFriendDetailV1 = new SearchUserResponseFriendDetailV1();
    let userDetail: SearchUserResponseDetailV1 = new SearchUserResponseDetailV1();
    userDetail.userId = userId;
    userDetail.userName = updateUserRequestV1.userName;
    userDetail.emailAddress = updateUserRequestV1.emailAddress;
    userDetail.friendDetail = Array.of(friendDetail);

    return userDetail;
  }
}

@Injectable()
export class DefaultDeleteUserService implements DeleteUserService {

  deleteUser(userId: string): SearchUserResponseDetailV1 {
    let friendDetail: SearchUserResponseFriendDetailV1 = new SearchUserResponseFriendDetailV1();
    let userDetail: SearchUserResponseDetailV1 = new SearchUserResponseDetailV1();
    userDetail.userId = userId;

    userDetail.common = new CommonResponseBase();
    userDetail.common.deleteFlag = '1';
    userDetail.friendDetail = Array.of(friendDetail);

    return userDetail;

  }
}

@Injectable()
export class DefaultGetUserService implements GetUserService {

  getUser(userId: string, userCode: string, userType: UserType): SearchUserResponseV1 {
    let friendDetail: SearchUserResponseFriendDetailV1 = new SearchUserResponseFriendDetailV1();
    let userDetail: SearchUserResponseDetailV1 = new SearchUserResponseDetailV1();
    userDetail.userId = userId;
    userDetail.userCode = userCode;
    userDetail.userType = userType;
    userDetail.friendDetail = Array.of(friendDetail);
    let response: SearchUserResponseV1 = new SearchUserResponseV1();
    response.userDetail = Array.of(userDetail);

    return response;

  }
}