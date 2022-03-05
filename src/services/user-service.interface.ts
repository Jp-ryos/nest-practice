import { SearchUserResponseDetailV1 } from 'src/models/SearchUserResponseDetailV1';
import { SearchUserResponseV1 } from 'src/models/SearchUserResponseV1';
import { UpdateUserRequestV1 } from 'src/models/UpdateUserRequestV1';


export const _privateId_SearchUserService: string = '64c92b1b-557c-4500-bb80-b8d23b6c432e';
export const _privateId_UpdateUserService: string = 'c1177dc6-b73f-4a62-abb0-9ab0dd2a1365';
export const _privateId_DeleteUserService: string = '5d786180-3efc-44c8-8eba-12357700a67d';
export const _privateId_GetUserService: string = 'ad546d61-5712-4a52-99a3-3748ff591cd1';


export interface SearchUserService {
  searchUser(userId: string): SearchUserResponseDetailV1;
}

export interface UpdateUserService {
  updateUser(userId: string, updateUserRequestV1: UpdateUserRequestV1): SearchUserResponseDetailV1;
}

export interface DeleteUserService {
  deleteUser(userId: string): SearchUserResponseDetailV1;
}

export interface GetUserService {
  getUser(userId: string, userCode: string, userType: UserType): SearchUserResponseV1;
}