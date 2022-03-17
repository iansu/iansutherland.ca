import { siTwitter } from 'simple-icons/icons';

import Icon, { defaultProps, IconProps } from '~/components/icons/icon';

const TwitterIcon = (props: IconProps) => {
  return <Icon src={siTwitter} {...props} />;
};

TwitterIcon.defaultProps = defaultProps;

export { TwitterIcon };
