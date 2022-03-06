import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';

export class UpdateUserDto {
  constructor(request: UpdateUserRequestV1) {
    this.request = request;
  }
  request: UpdateUserRequestV1;
}