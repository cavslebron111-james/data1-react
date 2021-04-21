import React,{Component,Fragment} from 'react';
//import { clearErrors } from '../actions/errorActions';
import countryList from 'react-select-country-list';
import Select from 'react-select';
//import {Alert} from 'reactstrap';
import {reduxForm,Field} from 'redux-form';
import validate from './validate';
import asyncValidate from './asyncValidate';
import { connect } from 'react-redux';
import { addInfo } from '../actions/infoActions';
import PropTypes from 'prop-types';


 
  
 
  
 
  
    
  
    

    
  

  const renderField = ({
    input,
    label,
    type,
    
    
    
    meta: { asyncValidating, touched, error }
  }) => (
    <div>
      <label>{label}</label>
      <div className={asyncValidating ? 'async-validating' : ''}>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
  
   
  class ItemModal extends Component{
    constructor(props) {
      super(props)
    
     this.state = {
       
       passportno: '',
      lastname: '',
       firstname: '',
       middlename: '',
       nationality: '',
      birthday: '',
       checkindate: '',
       checkoutdate: '',
       visatype: '',
       gender:''
     //  options: this.options
     }
  //  this.onchange = this.onchange.bind(this);
   // this.onSubmit = this.onSubmit.bind(this);
  // this.options = countryList().getData();
    }
   
      static propTypes = {
      isAuthenticated: PropTypes.bool,
     //   //error: PropTypes.object.isRequired,
        addInfo: PropTypes.func.isRequired
     //   //clearErrors: PropTypes.func.isRequired
       };
   
    
    
   
    
     
   
   render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
   
     return(
     
      <div className='container'>
        {this.props.isAuthenticated ?
    (
      <Fragment>
      <form onSubmit={handleSubmit(this.props.addInfo)}>
      <Field
          name="passportno"
          type="text"
          component={renderField}
          label="PassportNumber"
        />
        <Field
          name="lastname"
          type="text"
          component={renderField}
          label="LastName"
        />
        <Field
          name="firstname"
          type="text"
          component={renderField}
          label="FirstName"
        />
        <Field
          name="middlename"
          type="text"
          component={renderField}
          label="MiddleName"
        />
        <Field
          name="nationality"
          type="text"
         
         
        component={renderField}
          label="Nationality"
          />
       
        <Field
          name="gender"
          type="text"
          component={renderField}
          label="gender"
        />
        <Field
          name="birthday"
          type="date"
          
          component={renderField}
          label="birthdate"
        />
       
        <Field
          name="checkindate"
          type="date"
          component={renderField}
          label="CheckIndate"
        />
        <Field
          name="checkoutdate"
          type="date"
          component={renderField}
          label="CheckOutDate"
        />
        <Field
          name="visatype"
          type="text"
          component={renderField}
          label="VisaType"
        />
       
        <div>
          <button type="submit" disabled={submitting}>
            Sign Up
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      
      </form>
     
        </Fragment>
  
    ) : (
      <h1>PLEASE LOG IN FIRST OK</h1>
    )}
     
  </div>

    
   
      
    
    )
    }
  }


     
    
    
    
     
    
  


const mapStateToProps = (state) => {
  
 return {
  
  isAuthenticated: state.auth.isAuthenticated

  //erro: state.error.msg

  
 }

 
}



export default reduxForm({
  form: 'forming',
  validate,
  asyncValidate,
  asyncChangeFields: ['passportno']
})(connect(mapStateToProps,{addInfo})(ItemModal))