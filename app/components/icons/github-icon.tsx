import { siGithub } from 'simple-icons/icons';

import Icon, { defaultProps, IconProps } from '~/components/icons/icon';

const GitHubIcon = (props: IconProps) => {
  return <Icon src={siGithub} {...props} />;
};

GitHubIcon.defaultProps = defaultProps;

export { GitHubIcon };
