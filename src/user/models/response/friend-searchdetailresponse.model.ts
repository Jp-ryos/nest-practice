import { SearchUserResponseFriendDetailV1 } from './user-searchresponsefrienddetail.model';

export interface SearchFriendDetailReponseV1 {

  userId: string;

  userCode: string;

  userName: string;

  userType: UserType;

  friendDetail: SearchUserResponseFriendDetailV1[];
}