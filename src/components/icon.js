import React from 'react';

import TwitterIcon from '../assets/images/twitter.svg';
import GitHubIcon from '../assets/images/github.svg';

const Icon = props => {
  const iconStyles = {
    width: props.size,
    height: props.size
  };

  if (props.name === 'twitter') return <TwitterIcon style={iconStyles} fill={props.fill} />;
  if (props.name === 'github') return <GitHubIcon style={iconStyles} fill={props.fill} />;
};

Icon.defaultProps = {
  fill: 'currentColor',
  size: '24px'
};

export default Icon;
