import React, { useRef } from 'react';
import useNewsletterForm from './useNewsletterForm';
import { ReactComponent as ErrorIcon } from '../../svg/icon-error.svg';

type NewsletterFormProps = {
  emailPlaceholder: string;
  ctaText: string;
};

const NewsletterForm = ({
  emailPlaceholder,
  ctaText
}: NewsletterFormProps): JSX.Element => {
  const emailRef = useRef<HTMLInputElement>(null);
  const { email, emailError, handleSubmit } = useNewsletterForm(emailRef);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <label htmlFor='newsletter-email'>{emailPlaceholder}</label>
      <div>
        <input
          ref={emailRef}
          id='newsletter-email'
          type='email'
          placeholder={emailPlaceholder}
          size={30}
          value={email.value}
          onChange={email.handleChange}
          required
          aria-describedby='newsletter-email-error'
        />
        {emailError && <ErrorIcon />}
      </div>
      {emailError && (
        <p id='newsletter-email-error' role='alert'>
          {emailError}
        </p>
      )}
      <button type='submit'>{ctaText}</button>
    </form>
  );
};

export default NewsletterForm;
