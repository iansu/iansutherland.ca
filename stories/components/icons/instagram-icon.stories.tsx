import React from 'react';
import { Story, Meta } from '@storybook/react';

import { InstagramIcon, defaultProps } from '@components/icons';

export default {
  title: 'Components/Icons/InstagramIcon',
  component: InstagramIcon,
} as Meta;

const Template: Story = (args) => <InstagramIcon {...args} />;

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
  color: '#E4405F',
};
