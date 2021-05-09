import React from 'react';
import { Story, Meta } from '@storybook/react';

import ProfilePicture, { defaultProps } from '@components/profile-picture';

export default {
  title: 'Components/Profile Picture',
  component: ProfilePicture,
} as Meta;

const Template: Story = (args) => <ProfilePicture {...args} />;

export const Default = Template.bind({});
Default.args = defaultProps;

export const Large = Template.bind({});
Large.args = {
  ...defaultProps,
  size: 192,
};
