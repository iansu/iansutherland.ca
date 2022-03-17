import { siPolywork } from 'simple-icons/icons';

import Icon, { defaultProps, IconProps } from '~/components/icons/icon';

const PolyworkIcon = (props: IconProps) => {
  return <Icon src={siPolywork} {...props} />;
};

PolyworkIcon.defaultProps = defaultProps;

export { PolyworkIcon };
