import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';
import { User } from '../entities/user.entity';
import { SearchFriendDetailReponseV1 } from '../models/response/friend-searchdetailresponse.model';
import { SearchUserResponseDetailV1 } from '../models/response/user-searchresponsedetail.model';

export class UpdateUserDto {
  constructor(request: UpdateUserRequestV1) {
    this.request = request;
  }
  request: UpdateUserRequestV1;
  user: User;
  response: SearchUserResponseDetailV1;
}