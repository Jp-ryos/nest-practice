import { CommonResponse } from './user-commonresponse.model';

export interface SearchUserResponseFriendDetail {

  destinationUserId: string;

  closeUserFlag: string;
}

export type SearchUserResponseFriendDetailV1 = SearchUserResponseFriendDetail & CommonResponse;
