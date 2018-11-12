# CXP API

[![logo](https://www.coinxp.io/images/pc/inco.png)](https://www.coinxp.io/)  官网

CXP 是为交易所提供一个安全、高效、透明的数字资产管理和结算公共链。
CXP API 访问CXP公有链的一组接口。

 
# 功能清单

  - 用户相关接口
  - 充提币相关接口
  - 交易相关接口
  - 交易行情相关接口

你可以使用该组接口:
  - 实现交易用户的注册，查询数字资产等
  - 实现数字资产充提币
  - 实现数字资产的交易：买入，卖出，撤单，委托单查询等
  - 实现从链上获取交易合约最新价格，深度行情等
 
### 快速开始

```sh
$ git clone https://github.com/coinxp/CXP_API.git
$ npm i 
$ node src/cxpAPI.test.js
```
test.js 获取数字资产情况
```sh
 -------------------------
  cxp api V0.9
 -------------------------
cxpUrl http://demoeos.coinxp.io:8888
{ coins:
   [ { balance: 8000, locked: 0, type: 'BTC' },
     { balance: 8002, locked: 0, type: 'ETH' },
     { balance: 0, locked: 0, type: 'ZIL' },
     { balance: 99000, locked: 0, type: 'CXP' },
     { balance: 99000, locked: 0, type: 'EOS' } ] }
```

### 说明
开发语言
```
JavaScript
```
文件目录
```
--- package.json          依赖库
|
|__ src__cxpAPI.js        API 接口文件
    |____cxpAPI.test.js   demo  
    |____coinmap.json     代币映射文件
```


接口清单：
```
module.exports.createAccount = createAccount;
module.exports.reqUserAddress = reqUserAddress;
module.exports.queryBlance = queryBlance;
module.exports.queryBlanceExchange = queryBlanceExchange;
module.exports.queryCoinAddr = queryCoinAddr;

module.exports.bank2change = bank2change;
module.exports.change2bank = change2bank;
module.exports.reqwithdraw = reqwithdraw;
module.exports.getDeposits = getDeposits;
module.exports.getWithdraws = getWithdraws;

module.exports.buy = buy;
module.exports.sell = sell;
module.exports.cancel = cancel;

module.exports.getOrderbookbuy = getOrderbookbuy;
module.exports.getOrderbooksell = getOrderbooksell;
module.exports.queryLastPrice = queryLastPrice;
module.exports.getUserOrders = getUserOrders;

module.exports.genKeys = genKeys;
```
接口说明
----

[API REF](https://coinxp.github.io/cxpapi/index.html)   

GITHUB
----

https://github.com/coinxp

License
----

MIT



