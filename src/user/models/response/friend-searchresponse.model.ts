import { SearchUserResponseDetailV1 } from './user-searchresponsedetail.model';

export interface SearchUserResponseV1 {

  recordCount: number;

  userDetail: SearchUserResponseDetailV1[];
}