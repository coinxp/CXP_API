/**
 * Created by hylas on 2018/8/15.
 */


var api_cxp = require('./cxpAPI');

const PriKey = '5JFduBWtcggNQLTZMYY9wBJPqHn9C6WkSWnhdbwP37LA24KCpiV'
const PubKey = 'EOS6gt7fWEwtFKbGV33C5hN4BE7qAcwyZkR2rWDavTt5JFGj5MnSJ'
 
function log(error, result) {

    console.log('result:------------------------------------------------')
    console.log(result)
    console.log('error:------------------------------------------------')
    console.log(error)

}

// test
const test = async () => {

    const orderId = 1239213321;
    const name = 'sim';  
    const newUser ='yb1er';
    try {
        let ret = ''
 
        // 用户相关接口                     
        // ret = await api_cxp.createAccount(newUser, PriKey, PubKey, PubKey, host='http://testnet-bpb.coinxp.io:8888'  )
        // ret = await api_cxp.queryBlance(name, 'coinxp.bank', host='http://testnet-bpb.coinxp.io:8888'  )
        // console.log( ret )
        // ret = await api_cxp.queryCoinAddr(newUser,'BTC', host='http://testnet-bpb.coinxp.io:8888'  )
        // console.log(ret)        

        // ret = await api_cxp.queryBlanceExchange(name, 'exchange1'  )
        // console.log( ret )
 
        //await api_cxp.reqUserAddress(newUser,'BTC' , PriKey, log,host='http://testnet-bpb.coinxp.io:8888' )
        // ret = await api_cxp.queryCoinAddr(newUser, 'BTC',host='http://testnet-bpb.coinxp.io:8888' ); 
        // console.log( ret );

        // ret = await api_cxp.bank2change('wm', 'exchang1', 1.1, 'BTC', '5JFduBWtcggNQLTZMYY9wBJPqHn9C6WkSWnhdbwP37LA24KCpiV')
        // console.log( ret )
        // ret = await api_cxp.change2bank('wm', 'exchang1', 1.1, 'BTC', '5JFduBWtcggNQLTZMYY9wBJPqHn9C6WkSWnhdbwP37LA24KCpiV')
        // console.log( ret )        

        //充提币相关接口
        //ret = await api_cxp.reqwithdraw(newUser, 1233212, '2N49rrbPiqBe67f9eoCnkcgNQPAVketz2oM', '0.01000000', 'BTC',  PriKey, host='http://testnet-bpb.coinxp.io:8888')
        // ret = await api_cxp.getDeposits('BTC', 0,  log,  host='http://testnet-bpb.coinxp.io:8888')
        // ret = await api_cxp.getWithdraws('BTC', 0,  log,  host='http://testnet-bpb.coinxp.io:8888') 

        //交易相关接口
        //ret = await api_cxp.buy( 'ETH/BTC', 'wm', 1.0 , 1.0, 666603,  '5JFduBWtcggNQLTZMYY9wBJPqHn9C6WkSWnhdbwP37LA24KCpiV' )
        //console.log( ret )
 
        //await  cancelAll( 'wm',  '5JsyJxLELCrYYM8q31y6zNsB1vPoB8c8kjb4wEyz2rasJw6PzLu' )
        //await  cancelAll( 'newUser',  PriKey )

     
        //ret = await api_cxp.buy(  'ETH/BTC', 'wm', 0.003 , 1, 666606,  '5JFduBWtcggNQLTZMYY9wBJPqHn9C6WkSWnhdbwP37LA24KCpiV', 'exchange1', host='http://testnet-bpb.coinxp.io:8888' )
        //ret = await api_cxp.sell( 'CXP/BTC', 'wm', 1.2 , 11, 777705,  '5JFduBWtcggNQLTZMYY9wBJPqHn9C6WkSWnhdbwP37LA24KCpiV', 'exchange1', host='http://testnet-bpb.coinxp.io:8888'  )
        //console.log( ret )

        //ret = await api_cxp.cancel('sim',  666606, '5JFduBWtcggNQLTZMYY9wBJPqHn9C6WkSWnhdbwP37LA24KCpiV', host='http://testnet-bpb.coinxp.io:8888');
       
        // ret =  await  api_cxp.getUserOrders('wm',log, host='http://testnet-bpb.coinxp.io:8888' )
        // console.log('data length:', ret.length )
        // console.log(ret)

        // 交易行情相关接口
        // console.log('getOrderbooksell:')
        // ret =  await  api_cxp.getOrderbooksell('ETH/BTC')
        // console.log(ret)
        //ret =  await  api_cxp.getOrderbookbuy('ETH/BTC')  
        //console.log(ret)
        //ret = await api_cxp.queryLastPrice('eth/btc')


        //其它接口
        //ret = await api_cxp.genKeys()

        ret =  await  api_cxp.getCoins( log, host='http://testnet-bpb.coinxp.io:8888' )
        //ret =  await  api_cxp.getTradepair( log,host='http://testnet-bpb.coinxp.io:8888' )

        console.log('ret:', ret )

    } catch (e) {
        console.error('test---', e);
    }

}
 
test();

