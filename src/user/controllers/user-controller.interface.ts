import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';
import { CreateUserRequestV1 } from '../models/request/user-createrequest.model';
import { SearchUserResponseV1 } from '../models/response/friend-searchresponse.model';
import { SearchUserResponseDetailV1 } from '../models/response/user-searchresponsedetail.model';

/**
 * ユーザ系APIのインターフェースです
 * @author Jp_ryos
 */
export interface UserControllerInterface {

  /**
   * ユーザ情報一覧取得API
   * リクエストに基づいたユーザ情報の一覧を取得します
   * @param userCode ユーザコード
   * @param userType ユーザ種別
   */
  getUser(userCode: string, userType: UserType): Promise<SearchUserResponseV1>;

  /**
   * ユーザ情報作成API
   * @param createUserRequest ユーザ情報作成用リクエストオブジェクト
   */
  createUser(createUserRequest: CreateUserRequestV1): Promise<SearchUserResponseDetailV1>;


  /**
   * ユーザ検索API
   * 指定されたユーザIdに紐づくユーザ情報を取得します
   * @param userId ユーザId
   * @returns
   */
  searchUser(userId: string): Promise<SearchUserResponseDetailV1>;

  /**
   * ユーザ情報更新API
   * ユーザ情報を更新します
   * @param userId ユーザId
   * @param updateUserRequestV1 ユーザ情報更新用リクエストオブジェクト
   * @returns
   */
  updateUser(userId: string, updateUserRequestV1: UpdateUserRequestV1): Promise<SearchUserResponseDetailV1>;

  /**
   * ユーザ情報削除API
   * ユーザ情報を削除します
   * @param userId ユーザId
   */
  deleteUser(userId: string): Promise<void>;

}

