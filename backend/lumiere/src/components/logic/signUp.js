export default function formValidationSignUp(
    { firstName },
    { lastName },
    { middleName },
    { email },
    { phoneNum },
    {role},
    { setErrors }
  ) {
    const validationErrors = {};
    if (!firstName.trim()) {
      validationErrors.first = "First Name is required";
    }
    if (!lastName.trim()) {
      validationErrors.last = "Last Name is required";
    }
    // if (!middleName.trim()) {
    //     validationErrors.middle = "Middle Name is required";
    //   }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (/\S+@\S+\.S+/.test(email)) {
      validationErrors.email = "Valid email is required";
    }
  
  
  
    if (!role.trim()) {
      validationErrors.role = "Role is required";
    }
   
  
    setErrors(validationErrors);
  }

