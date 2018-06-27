import React from 'react';
import styled from 'styled-components';

import { Form, FormHeading, Input, Button, Flex } from 'shared';

const Credentials = () => (
  <div>
    <FormHeading>Let's get started!</FormHeading>
    <Form>
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Flex.AlignCenter>
        <Button width="100%" height="45px" marginTop="18px">
          Next
        </Button>
      </Flex.AlignCenter>
    </Form>
  </div>
);
export default Credentials;
