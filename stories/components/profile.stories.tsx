import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container from '@components/container';
import Profile, { defaultProps } from '@components/profile';

export default {
  title: 'Components/Profile',
  component: Profile,
} as Meta;

const Template: Story = (args) => (
  <Container>
    <Profile {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = defaultProps;

export const More = Template.bind({});
More.args = {
  more: true,
};
