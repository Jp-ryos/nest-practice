import { MaxLength, ValidateIf, IsEmail } from 'class-validator';

export class UpdateUserRequestV1 {

  @ValidateIf((o, v) => v != null && v.length)
  @MaxLength(20)
  userName: string | null;


  @ValidateIf((o, v) => v != null && v.length)
  @IsEmail()
  emailAddress: string | null;
}