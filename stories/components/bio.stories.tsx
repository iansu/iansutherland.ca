import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container from '@components/container';
import Bio, { defaultProps } from '@components/bio';

export default {
  title: 'Components/Bio',
  component: Bio,
} as Meta;

const Template: Story = (args) => (
  <Container>
    <div className="content-links mt-4 leading-6 text-gray-700 md:ml-8">
      <Bio {...args} />
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = defaultProps;

export const More = Template.bind({});
More.args = {
  more: true,
};
