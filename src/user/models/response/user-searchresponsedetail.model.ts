import { CommonResponse } from './user-commonresponse.model';
import { CommonResponseBase } from './user-commonresponsebase.model';
import { SearchUserResponseFriendDetailV1 } from './user-searchresponsefrienddetail.model';

export interface SearchUserResponseDetail {

  userId: string;

  userCode: string;

  userName: string;

  emailAddress: string;

  userType: UserType;

  emailAddressActivationFlag: string;

  friendCode: string;

  ignoreAccessFlag: string;

  common: CommonResponseBase;

}

export type SearchUserResponseDetailV1 = SearchUserResponseDetail;