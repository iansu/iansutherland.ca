import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container from '@components/container';
import Footer from '@components/footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => (
  <Container>
    <Footer {...args} />
  </Container>
);

export const Default = Template.bind({});
