import Image from 'next/image';

export interface ProfilePictureProps {
  borderSize?: number;
  size?: number;
}

export const defaultProps: ProfilePictureProps = {
  borderSize: 4,
  size: 128,
};

const ProfilePicture = (props: ProfilePictureProps) => {
  const { borderSize, size } = props;

  return (
    <div
      className={`mx-auto rounded-full bg-gray-200 border-${borderSize} border-gray-300 flex-shrink-0 overflow-hidden`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src="/ian-sutherland-profile.jpg"
        width={size}
        height={size}
        layout="responsive"
        objectPosition="-4% -1.5%"
        priority={true}
      />
    </div>
  );
};

ProfilePicture.defaultProps = defaultProps;

export default ProfilePicture;
