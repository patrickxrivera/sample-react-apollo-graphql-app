import React from 'react';

import { Form, FormHeading, Input, Button, Flex } from 'shared';
import { ErrorTextWrapper } from '../Credentials/styles';

const Credentials = () => (
  <div>
    <FormHeading>What do your friends call you?</FormHeading>
    <Form>
      <Input type="email" name="email" placeholder="First Name" autoFocus />
      <ErrorTextWrapper />

      <Input type="password" name="password" placeholder="Last Name" />
      <ErrorTextWrapper />
      <Flex.AlignCenter>
        <Button width="100%" height="45px" marginTop="26px">
          Next
        </Button>
      </Flex.AlignCenter>
    </Form>
  </div>
);

export default Credentials;
