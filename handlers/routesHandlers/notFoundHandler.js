/*
*title:Not fount handler
*Description:
*Author:
*Date:
*/
//module Scaffolding
const handler = {};
handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
       message: 'Your requested URL was not Found',
    });
};
module.exports = handler;