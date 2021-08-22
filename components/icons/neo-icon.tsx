import { useTheme } from 'next-themes';

import BrandIcon, { defaultProps, IconProps } from '@components/icons/brand-icon';

const NeoIcon = (props: IconProps) => {
  const { resolvedTheme } = useTheme();
  const { color, colorful, hoverColor, size } = props;
  const brandColor = '#041c2c';
  const brandHoverColor = resolvedTheme === 'dark' ? '#fff' : '#010c13';
  const iconColor = colorful ? brandColor : color;
  const iconHoverColor = hoverColor ?? brandHoverColor;

  return (
    <BrandIcon color={iconColor} hoverColor={iconHoverColor} size={size}>
      <svg
        viewBox="0 0 902 278"
        version="1.1"
        id="b80c53a0-fbf6-4494-bbaf-81c896ec0e21"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          strokeLinejoin: 'round',
          strokeMiterlimit: 2,
        }}
        fill="currentcolor"
      >
        <title>Neo</title>
        <g transform="matrix(1,0,0,1,-61.0077,-373.032)">
          <g transform="matrix(1.26328,0,0,1.26328,-134.801,237.861)">
            <path
              d="M749.83,111.61C657.07,111.61 630.66,175.84 630.66,219.3C630.66,262.77 657.07,326.99 749.83,326.99C842.59,327 869,262.77 869,219.31C869,175.84 842.59,111.61 749.83,111.61M749.83,311.69C715.55,311.69 714.18,276.77 714.18,219.31C714.18,161.85 715.55,126.93 749.83,126.93C784.11,126.93 785.48,161.85 785.48,219.31C785.48,276.77 784.11,311.69 749.83,311.69"
              style={{ fill: 'currentcolor', fillRule: 'nonzero' }}
            />
          </g>
          <g transform="matrix(1.26328,0,0,1.26328,-134.801,237.861)">
            <path
              d="M620.34,270.53C572.72,299.13 521.52,279.73 504.73,224.65C581.06,211.65 617.25,197.91 617.25,168.98C617.25,140.97 591.48,108.69 533.46,111.83C447.15,116.5 427.14,181.18 427.14,219.35C427.14,296.06 485.61,327.01 530.22,327.01C567.44,327.01 604.9,304.38 624.98,280.84L620.34,270.53ZM533.46,127.04C546.92,127.04 560.34,138.72 560.34,160.36C560.34,187.62 549.3,202.71 501.67,210.85C498.69,188.82 495.21,127.04 533.46,127.04"
              style={{ fill: 'currentcolor', fillRule: 'nonzero' }}
            />
          </g>
          <g transform="matrix(1.26328,0,0,1.26328,-134.801,237.861)">
            <path
              d="M263.37,107C235.41,129.04 199.05,148.14 155,157.96C160.29,160.01 191.83,170.26 191.83,198.61L191.83,279.26C191.83,299.75 182.49,303.75 165.69,306.69L165.69,317.96L296.56,317.96L296.56,306.69C279.76,303.76 270.42,299.76 270.42,279.26L270.42,198.61C270.42,168.12 276.22,147.06 301.34,147.06C325.75,147.06 328.89,168.59 328.89,198.61L328.85,317.96L433.26,317.96L433.26,306.69C416.46,303.76 407.12,299.76 407.12,279.26L407.12,177.77C407.12,141.37 390.76,111.61 340.37,111.61C315.12,111.61 284.13,122.38 263.39,144.91L263.37,107Z"
              style={{ fill: 'currentcolor', fillRule: 'nonzero' }}
            />
          </g>
        </g>
      </svg>
    </BrandIcon>
  );
};

NeoIcon.defaultProps = defaultProps;

export { NeoIcon };
