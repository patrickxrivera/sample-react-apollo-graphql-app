import React from 'react';

import { Form, FormHeading, Input, Button, Flex } from 'shared';
import { ErrorText, ErrorTextWrapper } from './styles';

const Credentials = ({ email, password, handleInputChange, handleFormSubmit, handleBlur }) => (
  <div>
    <FormHeading>Let's get started!</FormHeading>
    <Form onSubmit={handleFormSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={email.value}
        handleInputChange={handleInputChange}
        showErrorStyles={email.showErrorText}
        handleBlur={handleBlur}
        autoFocus
        data-test="email"
      />
      <ErrorTextWrapper>
        {email.showErrorText && <ErrorText>{email.errorText}</ErrorText>}
      </ErrorTextWrapper>

      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={password.value}
        handleInputChange={handleInputChange}
        showErrorStyles={password.showErrorText}
        handleBlur={handleBlur}
      />
      <ErrorTextWrapper>
        {password.showErrorText && <ErrorText>{password.errorText}</ErrorText>}
      </ErrorTextWrapper>
      <Flex.AlignCenter>
        <Button
          onClick={handleFormSubmit}
          onKeyPress={handleFormSubmit}
          width="100%"
          height="45px"
          marginTop="26px">
          Next
        </Button>
      </Flex.AlignCenter>
    </Form>
  </div>
);

export default Credentials;
