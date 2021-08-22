import React from 'react';
import { Story, Meta } from '@storybook/react';

import Links from '@pages/links';

export default {
  title: 'Pages/Links',
  component: Links,
} as Meta;

const Template: Story = (args) => <Links {...args} />;

export const Default = Template.bind({});
