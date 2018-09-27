/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * @file:     pls-sdk
 * @authors:  qiankun <chuck.ql@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/85053)
 * @date      18/1/31
 */

'use strict';
const DyplsapiClient = require('@alicloud/dyplsapi-2017-05-25')
const DybaseapiClient = require('@alicloud/dybaseapi')
const MNSClient = require('@alicloud/mns')
// 小号呼叫状态回执/录音状态报告接收/短信内容报告接受:SmsReport/SecretRecording/SecretSmsIntercept
const msgTypeList = ["SecretReport", "SecretRecording", "SecretSmsIntercept"]
const DYPLSAPI_ENDPOINT = 'http://dyplsapi.aliyuncs.com'
const DYBASEAPI_ENDPOINT = 'http://dybaseapi.aliyuncs.com'

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

class SMSClient {
  constructor(options) {
    let { accessKeyId, secretAccessKey } = options
    if (!accessKeyId) {
      throw new TypeError('parameter "accessKeyId" is required')
    }
    if (!secretAccessKey) {
      throw new TypeError('parameter "secretAccessKey" is required')
    }
    this.dyplsapiClient = new DyplsapiClient({ accessKeyId, secretAccessKey, endpoint: DYPLSAPI_ENDPOINT })
    this.dybaseClient = new DybaseapiClient({ accessKeyId, secretAccessKey, endpoint: DYBASEAPI_ENDPOINT })
    this.expire = []
    this.mnsClient = []
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} PhoneNoA - phoneNoA. required.
   * @param {String} PhoneNoB - phoneNoB. required.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} OutId - outId. optional.
   */
  bindAxb(params = {}, options = {}) {
    return this.dyplsapiClient.bindAxb(params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} PhoneNoA - phoneNoA. required.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} NoType - noType. optional.
   * @param {String} OutId - outId. optional.
   */
  bindAxn(params = {}, options = {}) {
    return this.dyplsapiClient.bindAxn(params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} PhoneNoA - phoneNoA. required.
   * @param {String} Extension - extension. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} PhoneNoX - phoneNoX. optional.
   * @param {String} Expiration - expireDate. required.
   * @param {String} ExpectCity - expectCity. optional.
   * @param {Boolean} IsRecordingEnabled - needRecord. optional.
   * @param {String} OutId - outId. optional.
   */
  bindAxnExtension(params = {}, options = {}) {
    return this.dyplsapiClient.bindAxnExtension(params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} CallId - callId. required.
   * @param {String} CallTime - callTime. optional.
   */
  queryRecordFileDownloadUrl(params = {}, options = {}) {
    return this.dyplsapiClient.queryRecordFileDownloadUrl(params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubsId - subsId. required.
   * @param {String} PhoneNoX - phoneNoX. required.
   */
  querySubscriptionDetail(params = {}, options = {}) {
    return this.dyplsapiClient.querySubscriptionDetail(params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubsId - subsId. required.
   * @param {String} SecretNo - secretNo. required.
   */
  unbindSubscription(params = {}, options = {}) {
    return this.dyplsapiClient.unbindSubscription(params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PoolKey - poolKey. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubsId - subsId. required.
   * @param {String} PhoneNoX - phoneNoX. required.
   * @param {String} PhoneNoA - phoneNoA. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} Expiration - expireDate. optional.
   * @param {String} OperateType - operateType. required.
   */
  updateSubscription(params = {}, options = {}) {
    return this.dyplsapiClient.updateSubscription(params, options);
  }

  //失效时间与当前系统时间比较，提前2分钟刷新token
  _refresh(type) {
    return this.expire[type] - new Date().getTime() > 2 * 60 * 1000
  }

  //获取token
  _getToken(type, queueName) {
    let msgType = msgTypeList[type]
    return this.dybaseClient.queryTokenForMnsQueue({ MessageType: msgType, queueName: queueName })
  }

  //根据类型获取mnsclient实例
  async _getMNSClient(type, queueName) {
    if (this.mnsClient && (this.mnsClient[type] instanceof MNSClient) && this._refresh(type)) {
      return this.mnsClient[type]
    }
    let {
      MessageTokenDTO: {
        SecurityToken,
        AccessKeyId,
        AccessKeySecret
      }
    } = await this._getToken(type, queueName)
    if (!(AccessKeyId && AccessKeySecret && SecurityToken)) {
      throw new TypeError('get token fail')
    }
    let mnsClient = new MNSClient('1943695596114318', {
      securityToken: SecurityToken,
      region: 'cn-hangzhou',
      accessKeyId: AccessKeyId,
      accessKeySecret: AccessKeySecret,
      // optional & default
      secure: false, // use https or http
      internal: false, // use internal endpoint
      vpc: false // use vpc endpoint
    })
    this.mnsClient[type] = mnsClient
    this.expire[type] = (new Date().getTime() + 10 * 60 * 1000)
    return mnsClient
  }

  async receiveMsg(type, queueName, waitSeconds = 10, isDel = false) {
    let mnsClient = await this._getMNSClient(type, queueName)
    const res = await mnsClient.receiveMessage(queueName, waitSeconds)
    const { code, body: { ReceiptHandle } } = res;
    if (isDel && code === 200 && ReceiptHandle) {
      await mnsClient.deleteMessage(queueName, ReceiptHandle)
    }
    return res;
  }
}

module.exports = SMSClient




