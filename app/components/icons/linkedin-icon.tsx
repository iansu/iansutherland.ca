import { siLinkedin } from 'simple-icons/icons';

import Icon, { defaultProps, IconProps } from '~/components/icons/icon';

const LinkedInIcon = (props: IconProps) => {
  return <Icon src={siLinkedin} {...props} />;
};

LinkedInIcon.defaultProps = defaultProps;

export { LinkedInIcon };
