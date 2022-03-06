import { MaxLength, IsNotEmpty, ValidateIf, IsEmail } from 'class-validator';

export class CreateUserRequestV1 {

  @IsNotEmpty()
  @MaxLength(20)
  userName: string;

  @ValidateIf((o, v) => v != null && v.length)
  @IsEmail()
  emailAddress: string;

}