import { defaultProps, IconProps } from '.';

const TwitchIcon = (props: IconProps) => {
  props = { ...defaultProps, ...props };
  const { color, size } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      id="b80c53a0-fbf6-4494-bbaf-81c896ec0e15"
      data-name="twitch-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <title>Twitch</title>
      <g id="4dc291fc-8aac-47e7-9145-5c0baf1f8b00" data-name="twitch">
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
      </g>
    </svg>
  );
};

export { TwitchIcon };
