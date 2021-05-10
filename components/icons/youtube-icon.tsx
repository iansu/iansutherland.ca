import BrandIcon, { defaultProps, IconProps } from '@components/icons/brand-icon';

const YouTubeIcon = (props: IconProps) => {
  const { color, colorful, hoverColor, size } = props;
  const brandColor = '#FF0000';
  const brandHoverColor = colorful ? '#DA0000' : brandColor;
  const iconColor = colorful ? brandColor : color;
  const iconHoverColor = hoverColor ?? brandHoverColor;

  return (
    <BrandIcon color={iconColor} hoverColor={iconHoverColor} size={size}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        id="b80c53a0-fbf6-4494-bbaf-81c896ec0e15"
        data-name="youtube-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>YouTube</title>
        <g id="4dc291fc-8aac-47e7-9145-5c0baf1f8b01" data-name="youtube">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </g>
      </svg>
    </BrandIcon>
  );
};

YouTubeIcon.defaultProps = defaultProps;

export { YouTubeIcon };
