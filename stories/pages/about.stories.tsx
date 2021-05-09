import React from 'react';
import { Story, Meta } from '@storybook/react';

import About from '@pages/about';

export default {
  title: 'Pages/About',
  component: About,
} as Meta;

const Template: Story = (args) => <About {...args} />;

export const Default = Template.bind({});
