import { User } from '../entities/user.entity';
import { CreateUserRequestV1 } from '../models/request/user-createrequest.model';
import { SearchUserResponseDetailV1 } from '../models/response/user-searchresponsedetail.model';

export class CreateUserDto {
  constructor(createUserRequest: CreateUserRequestV1) {
    this.request = createUserRequest;
  }

  request: CreateUserRequestV1;
  user: User;
  response: SearchUserResponseDetailV1;
}