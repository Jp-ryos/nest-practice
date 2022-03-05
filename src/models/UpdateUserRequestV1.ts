import { IsEmail, MaxLength } from 'class-validator';

export class UpdateUserRequestV1 {

  userName: string;

  @IsEmail()
  emailAddress: string;
}