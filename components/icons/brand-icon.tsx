import { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface BrandIconProps {
  children: React.ReactNode;
  color: string;
  hoverColor: string;
  size: string;
}

export interface IconProps {
  color?: string;
  colorful?: boolean;
  hoverColor?: string;
  size?: string;
}

export const defaultBrandIconProps = {
  colorful: false,
};

export const defaultProps = {
  colorful: false,
  size: '24px',
};

const BrandIconWrapper = styled.span<BrandIconProps>`
  display: inline-flex;
  align-items: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  color: ${(props) => props.color};

  &:hover {
    color: ${(props) => props.hoverColor};
  }
`;

const BrandIcon = (props: BrandIconProps) => {
  const { children, color, hoverColor, size } = props;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ height: size }}></div>;
  }

  return (
    <BrandIconWrapper size={size} color={color} hoverColor={hoverColor}>
      {children}
    </BrandIconWrapper>
  );
};

BrandIcon.defaultProps = defaultBrandIconProps;

export default BrandIcon;
