import { MaxLength, IsNotEmpty, ValidateIf, IsEmail } from 'class-validator';

export class CreateUserRequestV1 {

  @IsNotEmpty()
  @MaxLength(20)
  userName: string;

  @IsNotEmpty()
  @MaxLength(20)
  userCode: string;

  @ValidateIf((o, v) => v != null && v.length)
  @IsEmail()
  emailAddress: string;

  @IsNotEmpty()
  password: string;
}