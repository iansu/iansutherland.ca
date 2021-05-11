import React from 'react';
import { Story, Meta } from '@storybook/react';

import Logo, { defaultProps } from '@components/logo';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = defaultProps;

export const Large = Template.bind({});
Large.args = {
  ...defaultProps,
  size: 32,
  sizeSmall: 24,
};

export const Color = Template.bind({});
Color.args = {
  ...defaultProps,
  color: '#0f0',
  size: 32,
  sizeSmall: 24,
};

export const WithName = Template.bind({});
WithName.args = {
  ...defaultProps,
  withName: true,
};
