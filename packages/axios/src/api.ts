/* tslint:disable */
/* eslint-disable */
/**
 * ShanyLedger App
 * これはShanyLedgerのAPIサーバーの仕様です。
 *
 * The version of the OpenAPI document: 0.0.14
 * Contact: support@shany-ledger.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * メールアドレスとパスワードを使用したサインアップのリクエストボディです。
 * @export
 * @interface AuthSignupRequest
 */
export interface AuthSignupRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthSignupRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof AuthSignupRequest
     */
    'password': string;
}
/**
 * サインアップが成功した場合のレスポンスボディです。
 * @export
 * @interface AuthSignupSuccessResponse
 */
export interface AuthSignupSuccessResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthSignupSuccessResponse
     */
    'access_token': string;
    /**
     * 
     * @type {User}
     * @memberof AuthSignupSuccessResponse
     */
    'user': User;
}
/**
 * ゲートウェイまたはプロキシとして機能しているサーバーが上流のサーバーから無効なレスポンスを受け取った場合のエラー詳細です。
 * @export
 * @interface BadGatewayError
 */
export interface BadGatewayError {
    /**
     * 
     * @type {string}
     * @memberof BadGatewayError
     */
    'code': BadGatewayErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof BadGatewayError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof BadGatewayError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof BadGatewayError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof BadGatewayError
     */
    'status'?: BadGatewayErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof BadGatewayError
     */
    'instance'?: string;
}

export const BadGatewayErrorCodeEnum = {
    BadGatewayError: 'BadGatewayError'
} as const;

export type BadGatewayErrorCodeEnum = typeof BadGatewayErrorCodeEnum[keyof typeof BadGatewayErrorCodeEnum];
export const BadGatewayErrorStatusEnum = {
    NUMBER_502: 502
} as const;

export type BadGatewayErrorStatusEnum = typeof BadGatewayErrorStatusEnum[keyof typeof BadGatewayErrorStatusEnum];

/**
 * 
 * @export
 * @interface BadGatewayErrorAllOf
 */
export interface BadGatewayErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof BadGatewayErrorAllOf
     */
    'status'?: BadGatewayErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof BadGatewayErrorAllOf
     */
    'code'?: BadGatewayErrorAllOfCodeEnum;
}

export const BadGatewayErrorAllOfStatusEnum = {
    NUMBER_502: 502
} as const;

export type BadGatewayErrorAllOfStatusEnum = typeof BadGatewayErrorAllOfStatusEnum[keyof typeof BadGatewayErrorAllOfStatusEnum];
export const BadGatewayErrorAllOfCodeEnum = {
    BadGatewayError: 'BadGatewayError'
} as const;

export type BadGatewayErrorAllOfCodeEnum = typeof BadGatewayErrorAllOfCodeEnum[keyof typeof BadGatewayErrorAllOfCodeEnum];

/**
 * @type BadRequestError
 * リクエスト内容に誤りがあった場合のエラー詳細です。
 * @export
 */
export type BadRequestError = DefaultBadRequestError | ValidationError;

/**
 * 競合が発生した場合のエラー詳細です。
 * @export
 * @interface ConflictError
 */
export interface ConflictError {
    /**
     * 
     * @type {string}
     * @memberof ConflictError
     */
    'code': ConflictErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof ConflictError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof ConflictError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof ConflictError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof ConflictError
     */
    'status'?: ConflictErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof ConflictError
     */
    'instance'?: string;
}

export const ConflictErrorCodeEnum = {
    ConflictError: 'ConflictError'
} as const;

export type ConflictErrorCodeEnum = typeof ConflictErrorCodeEnum[keyof typeof ConflictErrorCodeEnum];
export const ConflictErrorStatusEnum = {
    NUMBER_409: 409
} as const;

export type ConflictErrorStatusEnum = typeof ConflictErrorStatusEnum[keyof typeof ConflictErrorStatusEnum];

/**
 * 
 * @export
 * @interface ConflictErrorAllOf
 */
export interface ConflictErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof ConflictErrorAllOf
     */
    'status'?: ConflictErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ConflictErrorAllOf
     */
    'code'?: ConflictErrorAllOfCodeEnum;
}

export const ConflictErrorAllOfStatusEnum = {
    NUMBER_409: 409
} as const;

export type ConflictErrorAllOfStatusEnum = typeof ConflictErrorAllOfStatusEnum[keyof typeof ConflictErrorAllOfStatusEnum];
export const ConflictErrorAllOfCodeEnum = {
    ConflictError: 'ConflictError'
} as const;

export type ConflictErrorAllOfCodeEnum = typeof ConflictErrorAllOfCodeEnum[keyof typeof ConflictErrorAllOfCodeEnum];

/**
 * リクエスト内容に誤りがあった場合のエラー詳細です。
 * @export
 * @interface DefaultBadRequestError
 */
export interface DefaultBadRequestError {
    /**
     * エラー内容が判別可能な文字列のコードです。
     * @type {string}
     * @memberof DefaultBadRequestError
     */
    'code': string;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof DefaultBadRequestError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof DefaultBadRequestError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof DefaultBadRequestError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof DefaultBadRequestError
     */
    'status'?: DefaultBadRequestErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof DefaultBadRequestError
     */
    'instance'?: string;
}

export const DefaultBadRequestErrorStatusEnum = {
    NUMBER_400: 400
} as const;

export type DefaultBadRequestErrorStatusEnum = typeof DefaultBadRequestErrorStatusEnum[keyof typeof DefaultBadRequestErrorStatusEnum];

/**
 * 
 * @export
 * @interface DefaultBadRequestErrorAllOf
 */
export interface DefaultBadRequestErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof DefaultBadRequestErrorAllOf
     */
    'status'?: DefaultBadRequestErrorAllOfStatusEnum;
}

export const DefaultBadRequestErrorAllOfStatusEnum = {
    NUMBER_400: 400
} as const;

export type DefaultBadRequestErrorAllOfStatusEnum = typeof DefaultBadRequestErrorAllOfStatusEnum[keyof typeof DefaultBadRequestErrorAllOfStatusEnum];

/**
 * サーバーがリクエストを理解したものの、認証が拒否された場合のエラー詳細です。
 * @export
 * @interface ForbiddenError
 */
export interface ForbiddenError {
    /**
     * 
     * @type {string}
     * @memberof ForbiddenError
     */
    'code': ForbiddenErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof ForbiddenError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof ForbiddenError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof ForbiddenError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof ForbiddenError
     */
    'status'?: ForbiddenErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof ForbiddenError
     */
    'instance'?: string;
}

export const ForbiddenErrorCodeEnum = {
    ForbiddenError: 'ForbiddenError'
} as const;

export type ForbiddenErrorCodeEnum = typeof ForbiddenErrorCodeEnum[keyof typeof ForbiddenErrorCodeEnum];
export const ForbiddenErrorStatusEnum = {
    NUMBER_403: 403
} as const;

export type ForbiddenErrorStatusEnum = typeof ForbiddenErrorStatusEnum[keyof typeof ForbiddenErrorStatusEnum];

/**
 * 
 * @export
 * @interface ForbiddenErrorAllOf
 */
export interface ForbiddenErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof ForbiddenErrorAllOf
     */
    'status'?: ForbiddenErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ForbiddenErrorAllOf
     */
    'code'?: ForbiddenErrorAllOfCodeEnum;
}

export const ForbiddenErrorAllOfStatusEnum = {
    NUMBER_403: 403
} as const;

export type ForbiddenErrorAllOfStatusEnum = typeof ForbiddenErrorAllOfStatusEnum[keyof typeof ForbiddenErrorAllOfStatusEnum];
export const ForbiddenErrorAllOfCodeEnum = {
    ForbiddenError: 'ForbiddenError'
} as const;

export type ForbiddenErrorAllOfCodeEnum = typeof ForbiddenErrorAllOfCodeEnum[keyof typeof ForbiddenErrorAllOfCodeEnum];

/**
 * 永久的に利用できなくなっている対象リソースにアクセスしている場合のエラー詳細です。
 * @export
 * @interface GoneError
 */
export interface GoneError {
    /**
     * 
     * @type {string}
     * @memberof GoneError
     */
    'code': GoneErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof GoneError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof GoneError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof GoneError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof GoneError
     */
    'status'?: GoneErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof GoneError
     */
    'instance'?: string;
}

export const GoneErrorCodeEnum = {
    GoneError: 'GoneError'
} as const;

export type GoneErrorCodeEnum = typeof GoneErrorCodeEnum[keyof typeof GoneErrorCodeEnum];
export const GoneErrorStatusEnum = {
    NUMBER_410: 410
} as const;

export type GoneErrorStatusEnum = typeof GoneErrorStatusEnum[keyof typeof GoneErrorStatusEnum];

/**
 * 
 * @export
 * @interface GoneErrorAllOf
 */
export interface GoneErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof GoneErrorAllOf
     */
    'status'?: GoneErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof GoneErrorAllOf
     */
    'code'?: GoneErrorAllOfCodeEnum;
}

export const GoneErrorAllOfStatusEnum = {
    NUMBER_410: 410
} as const;

export type GoneErrorAllOfStatusEnum = typeof GoneErrorAllOfStatusEnum[keyof typeof GoneErrorAllOfStatusEnum];
export const GoneErrorAllOfCodeEnum = {
    GoneError: 'GoneError'
} as const;

export type GoneErrorAllOfCodeEnum = typeof GoneErrorAllOfCodeEnum[keyof typeof GoneErrorAllOfCodeEnum];

/**
 * サーバーで何らかの問題が発生した場合のエラー詳細です。
 * @export
 * @interface InternalServerError
 */
export interface InternalServerError {
    /**
     * 
     * @type {string}
     * @memberof InternalServerError
     */
    'code': InternalServerErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof InternalServerError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof InternalServerError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof InternalServerError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof InternalServerError
     */
    'status'?: InternalServerErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof InternalServerError
     */
    'instance'?: string;
}

export const InternalServerErrorCodeEnum = {
    InternalServerError: 'InternalServerError'
} as const;

export type InternalServerErrorCodeEnum = typeof InternalServerErrorCodeEnum[keyof typeof InternalServerErrorCodeEnum];
export const InternalServerErrorStatusEnum = {
    NUMBER_500: 500
} as const;

export type InternalServerErrorStatusEnum = typeof InternalServerErrorStatusEnum[keyof typeof InternalServerErrorStatusEnum];

/**
 * 
 * @export
 * @interface InternalServerErrorAllOf
 */
export interface InternalServerErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof InternalServerErrorAllOf
     */
    'status'?: InternalServerErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof InternalServerErrorAllOf
     */
    'code'?: InternalServerErrorAllOfCodeEnum;
}

export const InternalServerErrorAllOfStatusEnum = {
    NUMBER_500: 500
} as const;

export type InternalServerErrorAllOfStatusEnum = typeof InternalServerErrorAllOfStatusEnum[keyof typeof InternalServerErrorAllOfStatusEnum];
export const InternalServerErrorAllOfCodeEnum = {
    InternalServerError: 'InternalServerError'
} as const;

export type InternalServerErrorAllOfCodeEnum = typeof InternalServerErrorAllOfCodeEnum[keyof typeof InternalServerErrorAllOfCodeEnum];

/**
 * メンテナンスのため一時的にサービスが利用できなくなった場合のエラー詳細です。
 * @export
 * @interface Maintenance
 */
export interface Maintenance {
    /**
     * 
     * @type {string}
     * @memberof Maintenance
     */
    'code': MaintenanceCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof Maintenance
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof Maintenance
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof Maintenance
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof Maintenance
     */
    'status'?: MaintenanceStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof Maintenance
     */
    'instance'?: string;
    /**
     * メンテナンス開始日時
     * @type {string}
     * @memberof Maintenance
     */
    'startAt': string;
    /**
     * メンテナンス終了予定日時
     * @type {string}
     * @memberof Maintenance
     */
    'endAt': string;
}

export const MaintenanceCodeEnum = {
    Maintenance: 'Maintenance'
} as const;

export type MaintenanceCodeEnum = typeof MaintenanceCodeEnum[keyof typeof MaintenanceCodeEnum];
export const MaintenanceStatusEnum = {
    NUMBER_503: 503
} as const;

export type MaintenanceStatusEnum = typeof MaintenanceStatusEnum[keyof typeof MaintenanceStatusEnum];

/**
 * 
 * @export
 * @interface MaintenanceAllOf
 */
export interface MaintenanceAllOf {
    /**
     * 
     * @type {string}
     * @memberof MaintenanceAllOf
     */
    'code'?: MaintenanceAllOfCodeEnum;
    /**
     * 
     * @type {number}
     * @memberof MaintenanceAllOf
     */
    'status'?: MaintenanceAllOfStatusEnum;
    /**
     * メンテナンス開始日時
     * @type {string}
     * @memberof MaintenanceAllOf
     */
    'startAt': string;
    /**
     * メンテナンス終了予定日時
     * @type {string}
     * @memberof MaintenanceAllOf
     */
    'endAt': string;
}

export const MaintenanceAllOfCodeEnum = {
    Maintenance: 'Maintenance'
} as const;

export type MaintenanceAllOfCodeEnum = typeof MaintenanceAllOfCodeEnum[keyof typeof MaintenanceAllOfCodeEnum];
export const MaintenanceAllOfStatusEnum = {
    NUMBER_503: 503
} as const;

export type MaintenanceAllOfStatusEnum = typeof MaintenanceAllOfStatusEnum[keyof typeof MaintenanceAllOfStatusEnum];

/**
 * サーバーがリクエストされたリソースを見つけることができない場合のエラー詳細です。
 * @export
 * @interface NotFoundError
 */
export interface NotFoundError {
    /**
     * 
     * @type {string}
     * @memberof NotFoundError
     */
    'code': NotFoundErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof NotFoundError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof NotFoundError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof NotFoundError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundError
     */
    'status'?: NotFoundErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof NotFoundError
     */
    'instance'?: string;
}

export const NotFoundErrorCodeEnum = {
    NotFoundError: 'NotFoundError'
} as const;

export type NotFoundErrorCodeEnum = typeof NotFoundErrorCodeEnum[keyof typeof NotFoundErrorCodeEnum];
export const NotFoundErrorStatusEnum = {
    NUMBER_404: 404
} as const;

export type NotFoundErrorStatusEnum = typeof NotFoundErrorStatusEnum[keyof typeof NotFoundErrorStatusEnum];

/**
 * 
 * @export
 * @interface NotFoundErrorAllOf
 */
export interface NotFoundErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof NotFoundErrorAllOf
     */
    'status'?: NotFoundErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof NotFoundErrorAllOf
     */
    'code'?: NotFoundErrorAllOfCodeEnum;
}

export const NotFoundErrorAllOfStatusEnum = {
    NUMBER_404: 404
} as const;

export type NotFoundErrorAllOfStatusEnum = typeof NotFoundErrorAllOfStatusEnum[keyof typeof NotFoundErrorAllOfStatusEnum];
export const NotFoundErrorAllOfCodeEnum = {
    NotFoundError: 'NotFoundError'
} as const;

export type NotFoundErrorAllOfCodeEnum = typeof NotFoundErrorAllOfCodeEnum[keyof typeof NotFoundErrorAllOfCodeEnum];

/**
 * RFC7807（https://www.rfc-editor.org/rfc/rfc7807）に準拠したエラー詳細のベースです。
 * @export
 * @interface ProblemDetails
 */
export interface ProblemDetails {
    /**
     * エラー内容が判別可能な文字列のコードです。
     * @type {string}
     * @memberof ProblemDetails
     */
    'code': string;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof ProblemDetails
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof ProblemDetails
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof ProblemDetails
     */
    'detail'?: string;
    /**
     * サーバによって生成されたHTTPステータスコードです。
     * @type {number}
     * @memberof ProblemDetails
     */
    'status'?: number;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof ProblemDetails
     */
    'instance'?: string;
}
/**
 * サーバーがこの未使用のコネクションをシャットダウンした場合のエラー詳細です。
 * @export
 * @interface RequestTimeoutError
 */
export interface RequestTimeoutError {
    /**
     * 
     * @type {string}
     * @memberof RequestTimeoutError
     */
    'code': RequestTimeoutErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof RequestTimeoutError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof RequestTimeoutError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof RequestTimeoutError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestTimeoutError
     */
    'status'?: RequestTimeoutErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof RequestTimeoutError
     */
    'instance'?: string;
}

export const RequestTimeoutErrorCodeEnum = {
    RequestTimeoutError: 'RequestTimeoutError'
} as const;

export type RequestTimeoutErrorCodeEnum = typeof RequestTimeoutErrorCodeEnum[keyof typeof RequestTimeoutErrorCodeEnum];
export const RequestTimeoutErrorStatusEnum = {
    NUMBER_408: 408
} as const;

export type RequestTimeoutErrorStatusEnum = typeof RequestTimeoutErrorStatusEnum[keyof typeof RequestTimeoutErrorStatusEnum];

/**
 * 
 * @export
 * @interface RequestTimeoutErrorAllOf
 */
export interface RequestTimeoutErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof RequestTimeoutErrorAllOf
     */
    'status'?: RequestTimeoutErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof RequestTimeoutErrorAllOf
     */
    'code'?: RequestTimeoutErrorAllOfCodeEnum;
}

export const RequestTimeoutErrorAllOfStatusEnum = {
    NUMBER_408: 408
} as const;

export type RequestTimeoutErrorAllOfStatusEnum = typeof RequestTimeoutErrorAllOfStatusEnum[keyof typeof RequestTimeoutErrorAllOfStatusEnum];
export const RequestTimeoutErrorAllOfCodeEnum = {
    RequestTimeoutError: 'RequestTimeoutError'
} as const;

export type RequestTimeoutErrorAllOfCodeEnum = typeof RequestTimeoutErrorAllOfCodeEnum[keyof typeof RequestTimeoutErrorAllOfCodeEnum];

/**
 * @type ServiceUnavailableError
 * メンテナンスもしくは過負荷等により一時的にサービスが利用できなくなった場合のエラー詳細です。
 * @export
 */
export type ServiceUnavailableError = Maintenance | any;

/**
 * リクエスト内容に誤りがあった場合のエラー詳細です。
 * @export
 * @interface TooManyRequestsError
 */
export interface TooManyRequestsError {
    /**
     * 
     * @type {string}
     * @memberof TooManyRequestsError
     */
    'code': TooManyRequestsErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof TooManyRequestsError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof TooManyRequestsError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof TooManyRequestsError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof TooManyRequestsError
     */
    'status'?: TooManyRequestsErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof TooManyRequestsError
     */
    'instance'?: string;
}

export const TooManyRequestsErrorCodeEnum = {
    TooManyRequestsError: 'TooManyRequestsError'
} as const;

export type TooManyRequestsErrorCodeEnum = typeof TooManyRequestsErrorCodeEnum[keyof typeof TooManyRequestsErrorCodeEnum];
export const TooManyRequestsErrorStatusEnum = {
    NUMBER_429: 429
} as const;

export type TooManyRequestsErrorStatusEnum = typeof TooManyRequestsErrorStatusEnum[keyof typeof TooManyRequestsErrorStatusEnum];

/**
 * 
 * @export
 * @interface TooManyRequestsErrorAllOf
 */
export interface TooManyRequestsErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof TooManyRequestsErrorAllOf
     */
    'status'?: TooManyRequestsErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TooManyRequestsErrorAllOf
     */
    'code'?: TooManyRequestsErrorAllOfCodeEnum;
}

export const TooManyRequestsErrorAllOfStatusEnum = {
    NUMBER_429: 429
} as const;

export type TooManyRequestsErrorAllOfStatusEnum = typeof TooManyRequestsErrorAllOfStatusEnum[keyof typeof TooManyRequestsErrorAllOfStatusEnum];
export const TooManyRequestsErrorAllOfCodeEnum = {
    TooManyRequestsError: 'TooManyRequestsError'
} as const;

export type TooManyRequestsErrorAllOfCodeEnum = typeof TooManyRequestsErrorAllOfCodeEnum[keyof typeof TooManyRequestsErrorAllOfCodeEnum];

/**
 * 有効な認証資格が不足していることによりリクエストが適用されない場合のエラー詳細です。
 * @export
 * @interface UnauthorizedError
 */
export interface UnauthorizedError {
    /**
     * 
     * @type {string}
     * @memberof UnauthorizedError
     */
    'code': UnauthorizedErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof UnauthorizedError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof UnauthorizedError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof UnauthorizedError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof UnauthorizedError
     */
    'status'?: UnauthorizedErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof UnauthorizedError
     */
    'instance'?: string;
}

export const UnauthorizedErrorCodeEnum = {
    UnauthorizedError: 'UnauthorizedError'
} as const;

export type UnauthorizedErrorCodeEnum = typeof UnauthorizedErrorCodeEnum[keyof typeof UnauthorizedErrorCodeEnum];
export const UnauthorizedErrorStatusEnum = {
    NUMBER_401: 401
} as const;

export type UnauthorizedErrorStatusEnum = typeof UnauthorizedErrorStatusEnum[keyof typeof UnauthorizedErrorStatusEnum];

/**
 * 
 * @export
 * @interface UnauthorizedErrorAllOf
 */
export interface UnauthorizedErrorAllOf {
    /**
     * 
     * @type {number}
     * @memberof UnauthorizedErrorAllOf
     */
    'status'?: UnauthorizedErrorAllOfStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof UnauthorizedErrorAllOf
     */
    'code'?: UnauthorizedErrorAllOfCodeEnum;
}

export const UnauthorizedErrorAllOfStatusEnum = {
    NUMBER_401: 401
} as const;

export type UnauthorizedErrorAllOfStatusEnum = typeof UnauthorizedErrorAllOfStatusEnum[keyof typeof UnauthorizedErrorAllOfStatusEnum];
export const UnauthorizedErrorAllOfCodeEnum = {
    UnauthorizedError: 'UnauthorizedError'
} as const;

export type UnauthorizedErrorAllOfCodeEnum = typeof UnauthorizedErrorAllOfCodeEnum[keyof typeof UnauthorizedErrorAllOfCodeEnum];

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    'emailVerifiedAt'?: any;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'updatedAt': string;
    /**
     * 
     * @type {any}
     * @memberof User
     */
    'deletedAt': any;
}
/**
 * バリデーションに失敗した場合のエラー詳細です。
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'code': ValidationErrorCodeEnum;
    /**
     * エラーの詳細ドキュメントへのURLです。
     * @type {string}
     * @memberof ValidationError
     */
    'type'?: string;
    /**
     * 人間が読むことのできる短いサマリーです。
     * @type {string}
     * @memberof ValidationError
     */
    'title': string;
    /**
     * 人間が読むことのできる説明文です。
     * @type {string}
     * @memberof ValidationError
     */
    'detail'?: string;
    /**
     * 
     * @type {number}
     * @memberof ValidationError
     */
    'status'?: ValidationErrorStatusEnum;
    /**
     * 問題の発生箇所の参照URIです。
     * @type {string}
     * @memberof ValidationError
     */
    'instance'?: string;
    /**
     * 
     * @type {Array<ValidationErrorAllOfErrors>}
     * @memberof ValidationError
     */
    'errors'?: Array<ValidationErrorAllOfErrors>;
}

export const ValidationErrorCodeEnum = {
    ValidationError: 'ValidationError'
} as const;

export type ValidationErrorCodeEnum = typeof ValidationErrorCodeEnum[keyof typeof ValidationErrorCodeEnum];
export const ValidationErrorStatusEnum = {
    NUMBER_400: 400
} as const;

export type ValidationErrorStatusEnum = typeof ValidationErrorStatusEnum[keyof typeof ValidationErrorStatusEnum];

/**
 * 
 * @export
 * @interface ValidationErrorAllOf
 */
export interface ValidationErrorAllOf {
    /**
     * 
     * @type {string}
     * @memberof ValidationErrorAllOf
     */
    'code'?: ValidationErrorAllOfCodeEnum;
    /**
     * 
     * @type {Array<ValidationErrorAllOfErrors>}
     * @memberof ValidationErrorAllOf
     */
    'errors'?: Array<ValidationErrorAllOfErrors>;
}

export const ValidationErrorAllOfCodeEnum = {
    ValidationError: 'ValidationError'
} as const;

export type ValidationErrorAllOfCodeEnum = typeof ValidationErrorAllOfCodeEnum[keyof typeof ValidationErrorAllOfCodeEnum];

/**
 * 
 * @export
 * @interface ValidationErrorAllOfErrors
 */
export interface ValidationErrorAllOfErrors {
    /**
     * 
     * @type {string}
     * @memberof ValidationErrorAllOfErrors
     */
    'field': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationErrorAllOfErrors
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationErrorAllOfErrors
     */
    'detail'?: string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * メールアドレスとパスワードを使用してサインアップとサインインを行います。
         * @summary サインアップとサインインを行います。
         * @param {AuthSignupRequest} authSignupRequest サインアップのリクエストです。
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signUpWithEmailAndPassword: async (authSignupRequest: AuthSignupRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authSignupRequest' is not null or undefined
            assertParamExists('signUpWithEmailAndPassword', 'authSignupRequest', authSignupRequest)
            const localVarPath = `/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authSignupRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * メールアドレスとパスワードを使用してサインアップとサインインを行います。
         * @summary サインアップとサインインを行います。
         * @param {AuthSignupRequest} authSignupRequest サインアップのリクエストです。
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signUpWithEmailAndPassword(authSignupRequest: AuthSignupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthSignupSuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signUpWithEmailAndPassword(authSignupRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * メールアドレスとパスワードを使用してサインアップとサインインを行います。
         * @summary サインアップとサインインを行います。
         * @param {AuthSignupRequest} authSignupRequest サインアップのリクエストです。
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signUpWithEmailAndPassword(authSignupRequest: AuthSignupRequest, options?: any): AxiosPromise<AuthSignupSuccessResponse> {
            return localVarFp.signUpWithEmailAndPassword(authSignupRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - interface
 * @export
 * @interface AuthApi
 */
export interface AuthApiInterface {
    /**
     * メールアドレスとパスワードを使用してサインアップとサインインを行います。
     * @summary サインアップとサインインを行います。
     * @param {AuthSignupRequest} authSignupRequest サインアップのリクエストです。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    signUpWithEmailAndPassword(authSignupRequest: AuthSignupRequest, options?: AxiosRequestConfig): AxiosPromise<AuthSignupSuccessResponse>;

}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI implements AuthApiInterface {
    /**
     * メールアドレスとパスワードを使用してサインアップとサインインを行います。
     * @summary サインアップとサインインを行います。
     * @param {AuthSignupRequest} authSignupRequest サインアップのリクエストです。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public signUpWithEmailAndPassword(authSignupRequest: AuthSignupRequest, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).signUpWithEmailAndPassword(authSignupRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


