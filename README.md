### 安装

``` javascript
 $ npm install @alicloud/pls-sdk --save
```

### 使用方法
1. 安装@alicloud/pls-sdk,请需要根据官方文档做一些配置
2. 产品文档: https://help.aliyun.com/document_detail/59773.html
3. 号码隐私保护控制台: https://dypls.console.aliyun.com/dypls.htm
3. Node.js版本 >= v4.6.0
4. 不支持在浏览器上使用

### DEMO

``` javascript
/**
 * 云通信基础能力业务-号码隐私保护示例，仅供参考。
 * Created on 2018-07-27
 */

const PLSClient = require('@alicloud/pls-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'yourAccessKeyId'
const secretAccessKey = 'yourAccessKeySecret'
//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName
const queueName = 'Alicom-Queue-13635054xxxxxx-SecretReport-100000'
//初始化sms_client
const plsClient = new PLSClient({ accessKeyId, secretAccessKey })
const PoolKey = 'FC100000xxxxxx'

// 购买号码
plsClient.buySecretNo({
  PoolKey,
  SpecId: 1,
  City: '杭州',
  SecretNo: '130'
}).then(function (res) {
  console.log('购买成功', res)
}, function (err) {
  console.log('购买失败', err)
})

// 释放号码
plsClient.releaseSecretNo({
  PoolKey,
  SecretNo: '13000000000'
}).then(function (res) {
  console.log('释放成功', res)
}, function (err) {
  console.log('释放失败', err)
})


// 绑定Axb号码示例方法
plsClient.bindAxb({
  PoolKey,
  PhoneNoA: '18040580000',
  PhoneNoB: '13871140000',
  Expiration: '2018-08-05 12:00:00'
}).then(function (res) {
  console.log('绑定axb成功', res)
}, function (err) {
  console.log('绑定axb失败', err)
})

// 更新绑定关系
plsClient.updateSubscription({
    PoolKey,
    SubsId,
    PhoneNoX: SecretNo,
    OperateType: 'updateExpire',
    Expiration: '2018-08-06 12:00:00'
  }).then(function (res) {
  console.log('更新绑定关系', res)
}, function (err) {
  console.log('更新绑定关系失败', err)
})

//查询绑定关系详情
plsClient.querySubscriptionDetail({
  PoolKey,
  SubsId: '18040580000',
  PhoneNoX: '15800000000',
}).then(function (res) {
  console.log('查询绑定关系详情', res)
}, function (err) {
  console.log('查询绑定关系详情失败', err)
})

// 查询通话录音下载链接
plsClient.queryRecordFileDownloadUrl({
  PoolKey,
  CallId: 'abcedf1234',
  CallTime: '2018-09-05 12:00:00',
}).then(function (res) {
  console.log('查询通话录音下载链接', res)
}, function (err) {
  console.log('查询通话录音下载链接失败', err)
})

// 解绑关系
plsClient.unbindSubscription({
  PoolKey,
  SubsId: '18040580000',
  SecretNo: '15800000000',
}).then(function (res) {
  console.log('解绑', res)
}, function (err) {
  console.log('解绑失败', err)
})

// 绑定Axn号码示例方法
plsClient.bindAxn({
  PoolKey,
  PhoneNoA: '18040580000',
  PhoneNoB: '15800000000',
  Expiration: '2018-08-05 12:00:00'
}).then(function (res) {
  console.log('绑定axn', res)
}, function (err) {
  console.log('绑定axn失败', err)
})

// AXN分机复用绑定示例
plsClient.bindAxnExtension({
  PoolKey,
  PhoneNoA: '18040580000',
  PhoneNoB: '15800000000',
  Extension: '001',
  Expiration: '2018-08-05 12:00:00'
}).then(function (res) {
  console.log('绑定axn', res)
}, function (err) {
  console.log('绑定axn失败', err)
})


/**
 * @param type: 0/1/2 对应 小号呼叫状态回执/录音状态报告接收/短信内容报告接受
 * @param queueName 队列名称，必须是type下的队列
 * @param waitSeconds 队列等待时间，如果没有删除该消息，过了等待时间后会重新推送
 * @param isDel 是否删除消息
 */
plsClient.receiveMsg(type,queueName, waitSeconds = 10, isDel = false).then(function (res) {
  //消息体需要base64解码
  let { code, body } = res
  if (code === 200) {
    //处理消息体,messagebody
    console.log('回执报告:', body)
  }
}, function (err) {
  console.log('回执报告:', err)
})
```
