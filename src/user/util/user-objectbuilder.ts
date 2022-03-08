import { Injectable } from '@nestjs/common';
import { Common } from 'src/common/entities/common.entity';
import { FALSE } from 'src/common/utils/Flag';
import { User } from '../entities/user.entity';
import { SearchUserResponseV1 } from '../models/response/friend-searchresponse.model';
import { CommonResponseBase } from '../models/response/user-commonresponsebase.model';
import { SearchUserResponseDetailV1 } from '../models/response/user-searchresponsedetail.model';


export function createResponse(entities: User[]): SearchUserResponseV1 {

  let response: SearchUserResponseV1 = {
    recordCount: 0,
    userDetail: []
  };

  if (entities) {
    response.recordCount = entities.length;
    entities.forEach((value) => {
      response.userDetail.push(createDetailResponse(value));
    });
  }

  return response;
}
/**
 * ユーザの詳細情報レスポンスをユーザエンティティから作成します
 * @param entity ユーザエンティティ
 * @returns response ユーザの詳細情報レスポンス
 */
export function createDetailResponse(entity: User): SearchUserResponseDetailV1 {
  let response: SearchUserResponseDetailV1 = {
    userId: entity.user_id,
    userCode: entity.user_code,
    userName: entity.user_name,
    userType: '1',
    emailAddress: entity.email_address,
    emailAddressActivationFlag: FALSE,
    friendCode: entity.friend_code,
    ignoreAccessFlag: FALSE,
    common: {
      ...createCommonBaseResponse(entity)
    }
  };
  return response;
}

/**
 * ユーザの共通証跡項目レスポンスをエンティティから作成します
 * @param entity ユーザエンティティ
 * @returns response ユーザの共通証跡項目レスポンス
 */
export function createCommonBaseResponse(entity: User): CommonResponseBase {
  let response: CommonResponseBase = {
    createUser: entity.common._create_user_name,
    createDateTime: entity.common._create_date_time,
    updateDateTime: entity.common._update_user_name,
    updateUser: entity.common._update_date_time,
    deleteFlag: entity.common._delete_flag
  };
  return response;
}
