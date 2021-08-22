import BrandIcon, { defaultProps, IconProps } from '@components/icons/brand-icon';

const PolyworkIcon = (props: IconProps) => {
  const { color, colorful, hoverColor, size } = props;
  const brandColor = '#543DE0';
  const brandHoverColor = colorful ? '#3f2cbd' : brandColor;
  const iconColor = colorful ? brandColor : color;
  const iconHoverColor = hoverColor ?? brandHoverColor;

  return (
    <BrandIcon color={iconColor} hoverColor={iconHoverColor} size={size}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        id="b80c53a0-fbf6-4494-bbaf-81c896ec0e20"
        data-name="youtube-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Polywork</title>
        <g id="4dc291fc-8aac-47e7-9145-5c0baf1f8b01" data-name="polywork">
          <path d="M19.125 0H4.875A4.865 4.865 0 0 0 0 4.875v14.25C0 21.825 2.175 24 4.875 24h6.6c2.7 0 4.875-2.175 4.875-4.875V16.65h2.775c2.7 0 4.875-2.175 4.875-4.875v-6.9C24 2.175 21.825 0 19.125 0zM16.5 1.275h2.625a3.6 3.6 0 0 1 3.6 3.6v2.7H16.5v-6.3zM15.075 9v6.45H8.85V9h6.225zM8.85 1.2h6.225v6.375H8.85V1.2zM1.275 4.8a3.6 3.6 0 0 1 3.6-3.6H7.5v6.375H1.275V4.8zM7.5 9v6.45H1.2V9h6.3zm0 13.725H4.8a3.6 3.6 0 0 1-3.6-3.6V16.8h6.3v5.925zm7.575-3.525a3.6 3.6 0 0 1-3.6 3.6H8.85v-5.925h6.225V19.2zm7.65-7.35a3.6 3.6 0 0 1-3.6 3.6H16.5V9h6.225v2.85z" />
        </g>
      </svg>
    </BrandIcon>
  );
};

PolyworkIcon.defaultProps = defaultProps;

export { PolyworkIcon };
