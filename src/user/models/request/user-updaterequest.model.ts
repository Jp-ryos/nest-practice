import { IsEmail, MaxLength } from 'class-validator';

export class UpdateUserRequestV1 {

  userName: string | null;

  emailAddress: string | null;
}