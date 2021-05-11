import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AngelListIcon, defaultProps } from '@components/icons';

export default {
  title: 'Components/Icons/AngelListIcon',
  component: AngelListIcon,
} as Meta;

const Template: Story = (args) => <AngelListIcon {...args} />;

export const Default = Template.bind({});
Default.args = defaultProps;

export const Large = Template.bind({});
Large.args = {
  ...defaultProps,
  size: '128px',
};

export const Colorful = Template.bind({});
Colorful.args = {
  ...defaultProps,
  colorful: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...defaultProps,
  color: '#0f0',
  hoverColor: '#f00',
};
