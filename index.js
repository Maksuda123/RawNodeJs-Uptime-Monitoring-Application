
/*
*title:Hanndle Req Res
*Description:
*Author:
*Date:
*/
// dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');
// app object - module scaffolding
const app = {};


//testing file system
//pore muche dibo

//Read
// data.read('test', 'newFile', (err, data)=> {
//     console.log(err, data);
// });

// //update
//  data.update('test', 'newFile', {name: 'England', language: 'English'}, (err)=> {
//     console.log(err);
//   });

//delete
// //data.delete('test', 'newFile', (err)=> {
//          console.log(err);
//       });
    


// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;
// start the server
app.createServer();


