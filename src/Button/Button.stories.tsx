import React, { FC } from 'react';

import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

// Buttons with Knobs
export const Primary: FC = () => {
  const primayButtonProps = {
    text: text('Button Text', 'Next'),
    onClick: () => action('I Clicked'),
  };

  return <Button {...primayButtonProps} />;
};
