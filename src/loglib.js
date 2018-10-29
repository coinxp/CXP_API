var log4js = require('log4js');



loggerfun = function ( name ) {

    var logger = log4js.getLogger(name);
    logger.level = 'debug';

    log4js.configure({
            appenders: {
                ruleConsole: {type: 'console'},
                ruleFile: {
                    type: 'dateFile',
                    filename: 'logs/logfile-',
                    pattern: 'yyyy-MM-dd.log',
                    maxLogSize: 10 * 1000 * 1000,
                    numBackups: 3,
                    alwaysIncludePattern: true
                }
            },
            categories: {
                default: {appenders: ['ruleConsole', 'ruleFile'], level: 'info'}
            }
        });
        
     
    //logger.debug("load log4js");    
    //logger.info("Load log4js");  
    return logger;

}


exports.logger = loggerfun;


