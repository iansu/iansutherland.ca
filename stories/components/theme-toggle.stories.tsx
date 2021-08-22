import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container from '@components/container';
import ThemeToggle, { defaultProps } from '@components/theme-toggle';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
} as Meta;

const Template: Story = (args) => (
  <Container>
    <ThemeToggle {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = defaultProps;
