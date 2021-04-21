



const validate = values => {

    const errors = {}
    if (!values.passportno) {
      errors.passportno = 'Required'
     } else if (values.passportno.length < 6 ) {
        errors.passportno = 'Must be 12 characters or less'
      } else if (values.passportno.length > 12)  {
        errors.passportno = 'Must be 12 characters or less'
      }
    
    
    if (!values.lastname) {
      errors.lastname = 'Required'
    } else if (values.lastname.length > 30 ) {
      errors.lastname = 'lastname must not exceed to 30 characters or less'
    }

    if (!values.firstname) {
      errors.firstname = 'Required'
    } else if (values.firstname.length > 30 ) {
      errors.firstname = 'firstname must not exceed to 30 characters'
    }
   

   

    if (!values.nationality) {
      errors.nationality = 'Required'
    }

    if (!values.gender) {
      errors.gender = 'Required'
    }

    if (!values.birthday) {
      errors.birthday = 'Required'
    
      }
     
    

    if (!values.checkindate) {
      errors.checkindate= 'Required'
    }

    if (!values.checkoutdate) {
      errors.checkoutdate = 'Required'
    }

    if (!values.visatype) {
      errors.visatype = 'Required'
    }
    return errors
  }
  
  export default validate