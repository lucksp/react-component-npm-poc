import React, { FC } from 'react';

import { Button } from './Button';
// import { Story } from '@storybook/react/types-6-0';
// import { ButtonProps } from './Button.types';
import { action } from '@storybook/addon-actions';

// // This default export determines where you story goes in the story list
// const Template: Story<ButtonProps> = args => <Button {...args} />;

// // Each story then reuses that template
// export const Primary = Template.bind({});
// Primary.args = {
//   testId: 'storybook-test',
//   text: 'Click',
//   onClick: action('clicked'),
// };

export default {
  title: 'Button',
};

export const Primary: FC = () => <Button text="Click Me" onClick={action('I Clicked')} />;
