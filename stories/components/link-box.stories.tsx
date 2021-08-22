import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container from '@components/container';
import LinkBox, { defaultProps } from '@components/link-box';
import { GitHubIcon } from '@components/icons';

export default {
  title: 'Components/LinkBox',
  component: LinkBox,
} as Meta;

const Template: Story = (args) => (
  <Container>
    <div className="mt-4 md:ml-8 leading-6 text-gray-700 content-links">
      <LinkBox
        {...args}
        title="GitHub"
        href={args.href ? args.href : 'https://github.com/iansu'}
        description="Follow my work on GitHub"
        icon={<GitHubIcon size={'48px'} />}
      />
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = defaultProps;

export const AsDiv = Template.bind({});
AsDiv.args = {
  as: 'div',
};

export const Internal = Template.bind({});
AsDiv.args = {
  internal: true,
  href: '/',
};
