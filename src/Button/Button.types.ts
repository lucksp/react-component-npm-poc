import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
  onClick: (e: MouseEvent) => void;
  text: string;
}
