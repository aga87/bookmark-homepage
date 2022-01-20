import React, { useState } from 'react';
import useFormInput from '../../hooks/useFormInput';

type ReturnType = {
  email: {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  emailError: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const useNewsletterForm = (
  emailRef: React.MutableRefObject<HTMLInputElement | null>
): ReturnType => {
  const email = useFormInput('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Client-side validation: validate email with Constraint Validation API
    const emailField = emailRef.current as HTMLInputElement;
    const { valid, valueMissing, typeMismatch } = emailField.validity;
    if (valid) {
      setEmailError('');
      // -> Handle form submission (not part of the assignment)
      // -> Advisable: Display confirmation message if form submission is successful (not part of the assignment)
      // -> Advisable: Test if the form was submitted with correct values (not part of the assignment)
      console.log(
        // Not to be used in a real-project
        `Submitting the newsletter form with the email address: ${emailField.value}`
      );
      return;
    }
    if (valueMissing || typeMismatch) {
      // Assuming the same error message if the email field is empty or not correctly formatted
      setEmailError(`Whoops, make sure it's an email`);
    }
  };

  return { email, emailError, handleSubmit };
};

export default useNewsletterForm;
