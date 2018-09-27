/**
 * Copyright(c) Alibaba Group Holding Limited.
 *
 * @file:     pls-sdk
 * @authors:  qiankun <chuck.ql@alibaba-inc.com> (https://work.alibaba-inc.com/work/u/85053)
 * @date      18/1/31
 */

'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DyplsapiClient = require('@alicloud/dyplsapi-2017-05-25');
var DybaseapiClient = require('@alicloud/dybaseapi');
var MNSClient = require('@alicloud/mns');
// 小号呼叫状态回执/录音状态报告接收/短信内容报告接受:SmsReport/SecretRecording/SecretSmsIntercept
var msgTypeList = ["SecretReport", "SecretRecording", "SecretSmsIntercept"];
var DYPLSAPI_ENDPOINT = 'http://dyplsapi.aliyuncs.com';
var DYBASEAPI_ENDPOINT = 'http://dybaseapi.aliyuncs.com';

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

var SMSClient = function () {
  function SMSClient(options) {
    (0, _classCallCheck3.default)(this, SMSClient);
    var accessKeyId = options.accessKeyId,
        secretAccessKey = options.secretAccessKey;

    if (!accessKeyId) {
      throw new TypeError('parameter "accessKeyId" is required');
    }
    if (!secretAccessKey) {
      throw new TypeError('parameter "secretAccessKey" is required');
    }
    this.dyplsapiClient = new DyplsapiClient({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey, endpoint: DYPLSAPI_ENDPOINT });
    this.dybaseClient = new DybaseapiClient({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey, endpoint: DYBASEAPI_ENDPOINT });
    this.expire = [];
    this.mnsClient = [];
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


  (0, _createClass3.default)(SMSClient, [{
    key: 'bindAxb',
    value: function bindAxb() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

  }, {
    key: 'bindAxn',
    value: function bindAxn() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

  }, {
    key: 'bindAxnExtension',
    value: function bindAxnExtension() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

  }, {
    key: 'queryRecordFileDownloadUrl',
    value: function queryRecordFileDownloadUrl() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

  }, {
    key: 'querySubscriptionDetail',
    value: function querySubscriptionDetail() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

  }, {
    key: 'unbindSubscription',
    value: function unbindSubscription() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

  }, {
    key: 'updateSubscription',
    value: function updateSubscription() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.dyplsapiClient.updateSubscription(params, options);
    }

    //失效时间与当前系统时间比较，提前2分钟刷新token

  }, {
    key: '_refresh',
    value: function _refresh(type) {
      return this.expire[type] - new Date().getTime() > 2 * 60 * 1000;
    }

    //获取token

  }, {
    key: '_getToken',
    value: function _getToken(type, queueName) {
      var msgType = msgTypeList[type];
      return this.dybaseClient.queryTokenForMnsQueue({ MessageType: msgType, queueName: queueName });
    }

    //根据类型获取mnsclient实例

  }, {
    key: '_getMNSClient',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(type, queueName) {
        var _ref2, _ref2$MessageTokenDTO, SecurityToken, AccessKeyId, AccessKeySecret, mnsClient;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.mnsClient && this.mnsClient[type] instanceof MNSClient && this._refresh(type))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return', this.mnsClient[type]);

              case 2:
                _context.next = 4;
                return this._getToken(type, queueName);

              case 4:
                _ref2 = _context.sent;
                _ref2$MessageTokenDTO = _ref2.MessageTokenDTO;
                SecurityToken = _ref2$MessageTokenDTO.SecurityToken;
                AccessKeyId = _ref2$MessageTokenDTO.AccessKeyId;
                AccessKeySecret = _ref2$MessageTokenDTO.AccessKeySecret;

                if (AccessKeyId && AccessKeySecret && SecurityToken) {
                  _context.next = 11;
                  break;
                }

                throw new TypeError('get token fail');

              case 11:
                mnsClient = new MNSClient('1943695596114318', {
                  securityToken: SecurityToken,
                  region: 'cn-hangzhou',
                  accessKeyId: AccessKeyId,
                  accessKeySecret: AccessKeySecret,
                  // optional & default
                  secure: false, // use https or http
                  internal: false, // use internal endpoint
                  vpc: false // use vpc endpoint
                });

                this.mnsClient[type] = mnsClient;
                this.expire[type] = new Date().getTime() + 10 * 60 * 1000;
                return _context.abrupt('return', mnsClient);

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _getMNSClient(_x15, _x16) {
        return _ref.apply(this, arguments);
      }

      return _getMNSClient;
    }()
  }, {
    key: 'receiveMsg',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(type, queueName) {
        var waitSeconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
        var isDel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var mnsClient, res, code, ReceiptHandle;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._getMNSClient(type, queueName);

              case 2:
                mnsClient = _context2.sent;
                _context2.next = 5;
                return mnsClient.receiveMessage(queueName, waitSeconds);

              case 5:
                res = _context2.sent;
                code = res.code, ReceiptHandle = res.body.ReceiptHandle;

                if (!(isDel && code === 200 && ReceiptHandle)) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 10;
                return mnsClient.deleteMessage(queueName, ReceiptHandle);

              case 10:
                return _context2.abrupt('return', res);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function receiveMsg(_x17, _x18) {
        return _ref3.apply(this, arguments);
      }

      return receiveMsg;
    }()
  }]);
  return SMSClient;
}();

module.exports = SMSClient;
