import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React, { StrictMode } from 'react';

import { NextSteps } from './NextSteps';


// eslint-disable-next-line import/order
import * as module from '@seek/apac-candidate-header-footer';
// eslint-disable-next-line no-console
console.log(module);

interface AppProps {
  environment: 'development' | 'production';
}

export default ({ environment }: AppProps) => (
  <StrictMode>
    <BraidProvider theme={apac}>
      <NextSteps environment={environment} />
    </BraidProvider>
  </StrictMode>
);
