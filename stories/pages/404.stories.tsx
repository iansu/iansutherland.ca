import React from 'react';
import { Story, Meta } from '@storybook/react';

import NotFound from '@pages/404';

export default {
  title: 'Pages/404',
  component: NotFound,
} as Meta;

const Template: Story = (args) => <NotFound {...args} />;

export const Default = Template.bind({});
