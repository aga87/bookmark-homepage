import React, { useRef } from 'react';
import useNewsletterForm from './useNewsletterForm';
import SubmitButton from '../nano/SubmitButton';

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
    <form
      noValidate
      onSubmit={handleSubmit}
      className='c-newsletter-form l-newsletter-form'
    >
      <fieldset
        className={
          emailError
            ? 'c-newsletter-form__fieldset c-newsletter-form__fieldset--error l-newsletter-form__fieldset'
            : ' c-newsletter-form__fieldset l-newsletter-form__fieldset'
        }
      >
        <label htmlFor='newsletter-email' className='h-visually-hidden'>
          {emailPlaceholder}
        </label>
        <div
          className={`c-newsletter-form__input-wrapper ${
            emailError && 'c-newsletter-form__input-wrapper--error'
          }`}
        >
          <input
            className={
              emailError
                ? 'c-newsletter-form__input c-newsletter-form__input--error'
                : 'c-newsletter-form__input'
            }
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
        </div>
        {emailError && (
          <p
            className='c-newsletter-form__error'
            id='newsletter-email-error'
            role='alert'
          >
            {emailError}
          </p>
        )}
      </fieldset>

      <div className='l-newsletter-form__cta'>
        <SubmitButton label={ctaText} />
      </div>
    </form>
  );
};

export default NewsletterForm;
