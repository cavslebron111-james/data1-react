
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');






export default function validateInput(data){
    let errors = {};
    if (validator.isEmpty(data.passportno)){
      errors.passportno = 'passportno is required';
    }
    if (validator.isEmpty(data.lastname)){
      errors.lastname= 'lastname is required';
    }
  
    if (validator.isEmpty(data.firstname)){
      errors.firstname = ' firstname is required';
    }
    if (validator.isEmpty(data.middlename)){
      errors.middlename = 'middlename is required';
    }
  
  
  
  return {
    errors,
    isvalid: isEmpty(errors)
  }
  }
  