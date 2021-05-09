import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SpotifyIcon, defaultProps } from '@components/icons';

export default {
  title: 'Components/Icons/SpotifyIcon',
  component: SpotifyIcon,
} as Meta;

const Template: Story = (args) => <SpotifyIcon {...args} />;

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
  color: '#1ED760',
};
