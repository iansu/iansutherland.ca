import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TwitterIcon, defaultProps } from '@components/icons';

export default {
  title: 'Components/Icons/TwitterIcon',
  component: TwitterIcon,
} as Meta;

const Template: Story = (args) => <TwitterIcon {...args} />;

export const Default = Template.bind({});
Default.args = defaultProps;

export const Large = Template.bind({});
Large.args = {
  ...defaultProps,
  size: '128px',
};

export const Color = Template.bind({});
Color.args = {
  ...defaultProps,
  color: '#1DA1F2',
};
