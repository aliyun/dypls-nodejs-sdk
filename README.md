### 安装

``` javascript
 $ npm install @alicloud/pls-sdk --save
```

### 使用方法
1. 安装@alicloud/pls-sdk,请需要根据官方文档做一些配置
2. 产品文档: https://dypls.console.aliyun.com/dypls.htm
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
//在云通信页面开通相应业务消息后，就能在页面上获得对应的queueName,不用填最后面一段
const queueName = 'Alicom-Queue-13635054xxxxxx-'
//初始化sms_client
let plsClient = new PLSClient({ accessKeyId, secretAccessKey })
const PoolKey = 'FC100000xxxxxx'

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
  console.log('查询录音文件', res)
}, function (err) {
  console.log('查询录音文件失败', err)
})

//查询绑定关系详情
plsClient.querySubscriptionDetail({
  PoolKey: 'FC100000014418001',
  SubsId: '18040580000',
  PhoneNoX: '15800000000',
}).then(function (res) {
  console.log('绑定axn', res)
}, function (err) {
  console.log('绑定axn失败', err)
})

// 查询通话录音下载链接
plsClient.queryRecordFileDownloadUrl({
  PoolKey: 'FC100000014418001',
  CallId: 'abcedf1234',
  CallTime: '2018-09-05 12:00:00',
}).then(function (res) {
  console.log('绑定axn', res)
}, function (err) {
  console.log('绑定axn失败', err)
})

// 解绑关系
plsClient.unbindSubscription({
  PoolKey: 'FC100000014418001',
  SubsId: '18040580000',
  SecretNo: '15800000000',
}).then(function (res) {
  console.log('解绑', res)
}, function (err) {
  console.log('解绑', err)
})

// 绑定Axn号码示例方法
plsClient.bindAxb({
  PoolKey: 'FC100000014418001',
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
  PoolKey: 'FC100000014418001',
  PhoneNoA: '18040580000',
  PhoneNoB: '15800000000',
  Extension: '001',
  Expiration: '2018-08-05 12:00:00'
}).then(function (res) {
  console.log('绑定axn', res)
}, function (err) {
  console.log('绑定axn失败', err)
})


// 处理回执消息
plsClient.receiveMsg(queueName).then(function (res) {
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
