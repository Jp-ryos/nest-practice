import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { SearchUserResponseV1 } from '../models/response/friend-searchresponse.model';
import { SearchUserResponseDetailV1 } from '../models/response/user-searchresponsedetail.model';


export const _privateId_SearchUserService: string = '64c92b1b-557c-4500-bb80-b8d23b6c432e';
export const _privateId_UpdateUserService: string = 'c1177dc6-b73f-4a62-abb0-9ab0dd2a1365';
export const _privateId_DeleteUserService: string = '5d786180-3efc-44c8-8eba-12357700a67d';
export const _privateId_GetUserService: string = 'ad546d61-5712-4a52-99a3-3748ff591cd1';
export const _privateId_CreateUserService: string = 'a2aad150-5e68-42ca-bf0e-154cb30d3017';

export interface GetUserService {
  getUser(userCode: string, userType: UserType): Promise<SearchUserResponseV1>;
}

export interface CreateUserService {
  createUser(createUserDto: CreateUserDto): Promise<CreateUserDto>;
}

export interface SearchUserService {
  searchUser(userId: string): Promise<SearchUserResponseDetailV1>;
}

export interface UpdateUserService {
  updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<UpdateUserDto>;
}

export interface DeleteUserService {
  deleteUser(userId: string): Promise<void>;
}