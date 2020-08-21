import React, { FC } from 'react';
import { StyledButton } from './StyledButton.css';
import { ButtonProps } from './Button.types';
import { SVG } from '../SVG/Svg';

const Button: FC<ButtonProps> = ({
  text,
  autoFocus,
  disabled,
  testId,
  type = 'button',
  name,
  iconSource,
}) => {
  return (
    <StyledButton
      autoFocus={autoFocus}
      disabled={disabled}
      type={type}
      data-testid={testId ? `button-${testId}` : undefined}
      name={name}
    >
      <span>{text}</span>
      {iconSource && <SVG source={iconSource} fillcolor={'eee'} />}
    </StyledButton>
  );
};
export { Button };
