/* tslint:disable */
/* eslint-disable */
/**
 * ShanyLedger App
 * これはShanyLedgerのAPIサーバーの仕様です。
 *
 * The version of the OpenAPI document: 0.0.8
 * Contact: support@shany-ledger.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



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


