import React, { FC } from 'react';

import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { ButtonProps } from './Button.types';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const Default: FC = () => {
  const primayButtonProps: ButtonProps = {
    text: text('Button Text', 'Next'),
    onClick: action('onClick'),
  };

  return <Button {...primayButtonProps} />;
};

export const WithIcon: FC = () => {
  const primayButtonProps: ButtonProps = {
    text: text('Button Text', 'Submit'),
    onClick: action('onClick'),
    iconSource: text('Button Icon', 'https://image.flaticon.com/icons/svg/561/561104.svg'),
  };

  return <Button {...primayButtonProps} />;
};
