import { UpdateUserRequestV1 } from 'src/user/models/request/user-updaterequest.model';
import { SearchUserResponseV1 } from '../models/response/friend-searchresponse.model';
import { SearchUserResponseDetailV1 } from '../models/response/user-searchresponsedetail.model';

/**
 * ユーザ系APIのインターフェースです
 * @author Jp_ryos
 */
export interface UserControllerInterface {

  /**
   * ユーザ検索API
   * 指定されたユーザIdに紐づくユーザ情報を取得します
   * @returns
   */
  searchUser(userId: string): SearchUserResponseDetailV1;

  /**
   * ユーザ情報更新API
   * ユーザ情報を更新します
   * @param userId
   * @param updateUserRequestV1
   * @returns
   */
  updateUser(userId: string, updateUserRequestV1: UpdateUserRequestV1): SearchUserResponseDetailV1;

  /**
   * ユーザ情報削除API
   * ユーザ情報を削除します
   * @param userId
   */
  deleteUser(userId: string): any;

  /**
   * ユーザ情報一覧取得API
   * リクエストに基づいたユーザ情報の一覧を取得します
   * @param userId ユーザId
   * @param userCode ユーザコード
   * @param userType ユーザ種別
   */
  getUser(userId: string, userCode: string, userType: UserType): SearchUserResponseV1;
}

