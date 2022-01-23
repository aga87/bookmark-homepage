import React from 'react';

type SubmitButtonProps = {
  label: string;
};

const SubmitButton = ({ label }: SubmitButtonProps): JSX.Element => (
  <button type='submit' className='submit-button'>
    {label}
  </button>
);

export default SubmitButton;
