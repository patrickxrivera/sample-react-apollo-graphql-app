import React from 'react';

import { CredentialsContainer, Name } from 'shared';
import SignUpWrapper from './styles';

const SignUp = (props) => (
  <SignUpWrapper>
    <SignUpController {...props} />
  </SignUpWrapper>
);

const SignUpController = (props) => {
  const currStep = props.location.pathname.slice(-1);

  switch (currStep) {
    case '1':
      return <CredentialsContainer />;
    case '2':
      return <Name />;
    default:
      return <div>Sign Up</div>;
  }
};

export default SignUp;
