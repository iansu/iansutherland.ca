import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TwitchIcon, defaultProps } from '@components/icons';

export default {
  title: 'Components/Icons/TwitchIcon',
  component: TwitchIcon,
} as Meta;

const Template: Story = (args) => <TwitchIcon {...args} />;

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
  color: '#9146FF',
};
