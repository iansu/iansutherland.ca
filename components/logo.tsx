import Link from 'next/link';

export interface LogoProps {
  color?: string;
  size?: number;
  sizeSmall?: number;
  textSize?: string;
  textSizeSmall?: string;
  withName?: boolean;
}

export const defaultProps: LogoProps = {
  color: 'currentColor',
  size: 12,
  sizeSmall: 10,
  textSize: '3xl',
  textSizeSmall: '2xl',
  withName: false,
};

const Logo = (props: LogoProps) => {
  props = { ...defaultProps, ...props };
  const { color, size, sizeSmall, textSize, textSizeSmall, withName } = props;

  return (
    <Link href="/">
      <a className="flex items-center">
        <div className={`w-${sizeSmall} h-${sizeSmall} md:w-${size} md:h-${size}`}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1001 1001"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeMiterlimit: 1.5,
            }}
          >
            <g transform="matrix(1,0,0,1,-99.5,-99.5)">
              <g transform="matrix(1.2,0,0,1.2,0,0)">
                <g transform="matrix(2.45001,0,0,2.45001,-308.339,-608.156)">
                  <circle
                    cx="329.933"
                    cy="452.306"
                    r="170.067"
                    style={{ fill: color, stroke: 'white', strokeWidth: '0.34px' }}
                  />
                </g>
              </g>
              <g transform="matrix(1.2,0,0,1.2,0,0)">
                <g transform="matrix(0.967199,0,0,0.932766,-55.804,237.351)">
                  <rect
                    x="355.342"
                    y="65.711"
                    width="102"
                    height="437.1"
                    style={{
                      fill: 'white',
                      fillRule: 'nonzero',
                      stroke: 'white',
                      strokeWidth: '0.88px',
                      strokeLinecap: 'butt',
                      strokeMiterlimit: 1.41421,
                    }}
                  />
                  <path
                    d="M783.442,154.511C780.442,159.311 777.292,162.911 773.992,165.311C770.692,167.711 766.442,168.911 761.242,168.911C756.642,168.911 751.692,167.461 746.392,164.561C741.092,161.661 735.092,158.411 728.392,154.811C721.692,151.211 714.042,147.961 705.442,145.061C696.842,142.161 687.042,140.711 676.042,140.711C657.042,140.711 642.892,144.761 633.592,152.861C624.292,160.961 619.642,171.911 619.642,185.711C619.642,194.511 622.442,201.811 628.042,207.611C633.642,213.411 640.992,218.411 650.092,222.611C659.192,226.811 669.592,230.661 681.292,234.161C692.992,237.661 704.942,241.561 717.142,245.861C729.342,250.161 741.292,255.211 752.992,261.011C764.692,266.811 775.092,274.211 784.192,283.211C793.292,292.211 800.642,303.161 806.242,316.061C811.842,328.961 814.642,344.511 814.642,362.711C814.642,382.911 811.142,401.811 804.142,419.411C797.142,437.011 786.992,452.361 773.692,465.461C760.392,478.561 743.992,488.861 724.492,496.361C704.992,503.861 682.842,507.611 658.042,507.611C644.442,507.611 630.592,506.211 616.492,503.411C602.392,500.611 588.742,496.661 575.542,491.561C562.342,486.461 549.942,480.411 538.342,473.411C526.742,466.411 516.642,458.611 508.042,450.011L538.042,402.611C540.442,399.211 543.592,396.361 547.492,394.061C551.392,391.761 555.642,390.611 560.242,390.611C566.242,390.611 572.292,392.511 578.392,396.311C584.492,400.111 591.392,404.311 599.092,408.911C606.792,413.511 615.642,417.711 625.642,421.511C635.642,425.311 647.442,427.211 661.042,427.211C679.442,427.211 693.742,423.161 703.942,415.061C714.142,406.961 719.242,394.111 719.242,376.511C719.242,366.311 716.442,358.011 710.842,351.611C705.242,345.211 697.892,339.911 688.792,335.711C679.692,331.511 669.342,327.811 657.742,324.611C646.142,321.411 634.242,317.861 622.042,313.961C609.842,310.061 597.942,305.261 586.342,299.561C574.742,293.861 564.392,286.361 555.292,277.061C546.192,267.761 538.842,256.161 533.242,242.261C527.642,228.361 524.842,211.211 524.842,190.811C524.842,174.411 528.142,158.411 534.742,142.811C541.342,127.211 551.042,113.311 563.842,101.111C576.642,88.911 592.342,79.161 610.942,71.861C629.542,64.561 650.842,60.911 674.842,60.911C688.242,60.911 701.292,61.961 713.992,64.061C726.692,66.161 738.742,69.261 750.142,73.361C761.542,77.461 772.192,82.361 782.092,88.061C791.992,93.761 800.842,100.211 808.642,107.411L783.442,154.511Z"
                    style={{
                      fill: 'white',
                      fillRule: 'nonzero',
                      stroke: 'white',
                      strokeWidth: '0.88px',
                      strokeLinecap: 'butt',
                      strokeMiterlimit: 1.41421,
                    }}
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        {withName && (
          <h1 className={`font-bold text-black text-${textSizeSmall} md:text-${textSize} ml-3`}>
            Ian Sutherland
          </h1>
        )}
      </a>
    </Link>
  );
};

export default Logo;
