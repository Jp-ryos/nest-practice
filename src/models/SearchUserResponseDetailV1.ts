import { CommonResponse } from './CommonResponse';
import { SearchUserResponseFriendDetailV1 } from './SearchUserResponseFriendDetailV1';

export class SearchUserResponseDetailV1 extends CommonResponse {

  userId: string;

  userCode: string;

  userName: string;

  emailAddress: string;

  userType: UserType;

  emailAddressActivationFlag: string;

  friendCode: string;

  ignoreAccessFlag: string;

  friendDetail: SearchUserResponseFriendDetailV1[];
}