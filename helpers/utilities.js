/*
*title:Utilities
*Description:import utility functions
*Author:
*Date:
*/
//dependencies
const crypto = require('crypto');
const environments = require('./environments');
//module scaffolding
const utilities = {};

//parse JSON string to object
utilities.parseJSON = (jsonString) => {
    let output;

    try{
        output = JSON.parse(jsonString);
    } catch{
  output = {};
    }
    return output;
};

//hash string
utilities.hash = (str) => {
   if(typeof str=== 'string' && str.length >0) {
       //console.log(environments, process.env.NODE_Env);
       const hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex');
      return hash;
   } 
   return false;
};

//create random string
utilities.createRandomString = (strlength) => {
  
  let length = strlength;
  length = typeof(strlength) === 'number' && strlength >0 ? strlength : false;
  if(length){
      let possiblecharacters = 'abcdefghijklmnopqrstwxyz1234567890';
      let output = '';
      for(let i =1; i<=length; i+=1){
       let randomCharacter = possiblecharacters.charAt(Math.floor(Math.random() * possiblecharacters.length)
       ); 
       output += randomCharacter; 

      }
      return output;

  }else{
      return false;
  }
};

//export module
module.exports = utilities;