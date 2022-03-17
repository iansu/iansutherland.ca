import { siAngellist } from 'simple-icons/icons';

import Icon, { defaultProps, IconProps } from '~/components/icons/icon';

const AngelListIcon = (props: IconProps) => {
  return <Icon src={siAngellist} {...props} />;
};

AngelListIcon.defaultProps = defaultProps;

export { AngelListIcon };
