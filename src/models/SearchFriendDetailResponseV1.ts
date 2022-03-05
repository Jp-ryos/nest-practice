import { SearchUserResponseFriendDetailV1 } from './SearchUserResponseFriendDetailV1';

export class SearchFriendDetailReponseV1 {

  userId: string;

  userCode: string;

  userName: string;

  userType: UserType;

  friendDetail: SearchUserResponseFriendDetailV1[];
}