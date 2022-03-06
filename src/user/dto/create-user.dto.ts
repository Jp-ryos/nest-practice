import { CreateUserRequestV1 } from '../models/request/user-createrequest.model';

export class CreateUserDto {
  constructor(createUserRequest: CreateUserRequestV1) {
    this.request = createUserRequest;
  }

  request: CreateUserRequestV1;
}