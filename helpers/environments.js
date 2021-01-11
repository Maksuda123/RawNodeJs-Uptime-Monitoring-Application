/*
*title:Environments
*Description:handle all environment related things
*Author:
*Date:
*/
//dependencies

//module
const environments = {};
//staging environment
environments.staging = {
    port: 6000,
    envName: 'staging',
    secretKey: 'sfggghncdfggh',
    maxChecks: 5,
};
//production environment
environments.prduction = {
    port: 5000,
    envName: 'production',
    secretKey: 'gfdhgjhgkkl',
    maxChecks: 5,
};

//determine wich environment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV : 'staging';


//export corresponding environment object
const environmentToExport = 
typeof environments[currentEnvironment] === 'object'
    ? environments[currentEnvironment]
    : environments.staging;

    //export module
    module.exports = environmentToExport;