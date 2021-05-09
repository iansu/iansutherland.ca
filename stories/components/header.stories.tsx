import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container from '@components/container';
import Header from '@components/header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: Story = (args) => (
  <Container>
    <Header {...args} />
  </Container>
);

export const Default = Template.bind({});
