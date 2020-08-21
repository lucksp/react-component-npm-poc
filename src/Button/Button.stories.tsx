import React, { FC } from 'react';

import { Button } from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
};

export const Primary: FC = () => <Button text="Click Me" onClick={action('I Clicked')} />;
