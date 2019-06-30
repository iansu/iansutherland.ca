import React from 'react';

import AngelListIcon from '../assets/images/icons/angellist.svg';
import GitHubIcon from '../assets/images/icons/github.svg';
import InstagramIcon from '../assets/images/icons/instagram.svg';
import LinkedInIcon from '../assets/images/icons/linkedin.svg';
import SpotifyIcon from '../assets/images/icons/spotify.svg';
import TwitterIcon from '../assets/images/icons/twitter.svg';

const Icon = props => {
  const iconStyles = {
    width: props.size,
    height: props.size
  };

  if (props.name === 'angellist') return <AngelListIcon style={iconStyles} fill={props.fill} />;
  if (props.name === 'github') return <GitHubIcon style={iconStyles} fill={props.fill} />;
  if (props.name === 'instagram') return <InstagramIcon style={iconStyles} fill={props.fill} />;
  if (props.name === 'linkedin') return <LinkedInIcon style={iconStyles} fill={props.fill} />;
  if (props.name === 'spotify') return <SpotifyIcon style={iconStyles} fill={props.fill} />;
  if (props.name === 'twitter') return <TwitterIcon style={iconStyles} fill={props.fill} />;
};

Icon.defaultProps = {
  fill: 'currentColor',
  size: '24px'
};

export default Icon;
