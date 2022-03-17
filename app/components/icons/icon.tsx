import { SimpleIcon } from 'simple-icons';

export interface IconProps {
  color?: string;
  size?: number | string;
  title?: string;
}

export const defaultProps = {
  color: 'currentColor',
  size: '24px',
};

const Icon = ({ src, color, size, title }: IconProps & { src: SimpleIcon }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <title>{title || src.title}</title>
      <path d={src.path} />
    </svg>
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
