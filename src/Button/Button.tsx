import React, { FC } from 'react';
import { StyledButton } from './StyledButton.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
  children,
  autoFocus,
  disabled,
  testId,
  type = 'button',
  name,
}) => {
  return (
    <StyledButton
      autoFocus={autoFocus}
      disabled={disabled}
      type={type}
      data-testid={testId ? `button-${testId}` : undefined}
      name={name}
    >
      {children}
    </StyledButton>
  );
};
export { Button };
