import { ButtonHTMLAttributes, MouseEvent } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** iconSource: (optional) asset location */
  iconSource?: string;
  /** onClick: callback for when this element is clicked */
  onClick: (e: MouseEvent) => void;
  /** text: What do you want the button to say? */
  text: string;
  /** testId: (optional) extremely helpful with React-Testing-Library */
  testId?: string;
  /** type: (optional) HTML5 button type */
  type?: 'button' | 'submit' | 'reset';
}
