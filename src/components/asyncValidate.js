//const express = require('express');
//const router = express.Router();
//const auth = require('../../middleware/auth');





// Item Model
//const Info = require('../../../models/Info');



const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then( () => {
    // simulate server latency
   // if (['1234567890'].includes(values.passportno)) {
   // if ([passportno].includes(values.passportno)) {
//     Info.findOne( values.passportno )
    
      if(values.passportno) {
      
     throw { passportno: 'That passportno is taken' }
  }  
})


}


export default asyncValidate