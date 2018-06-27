import React from 'react';

import { Form, FormHeading, Input } from 'shared';

const Credentials = () => (
  <div>
    <FormHeading>Let's get started!</FormHeading>
    <Form>
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
    </Form>
  </div>
);
export default Credentials;
