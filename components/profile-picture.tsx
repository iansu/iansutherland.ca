import Image from 'next/image';

export interface ProfilePictureProps {
  borderSize?: string;
  size?: number;
}

export const defaultProps: ProfilePictureProps = {
  borderSize: 'border-4',
  size: 128,
};

const ProfilePicture = (props: ProfilePictureProps) => {
  const { borderSize, size } = props;

  return (
    <div
      className={`mx-auto rounded-full bg-gray-200 dark:bg-gray-500 ${borderSize} border-gray-300 dark:border-gray-600 flex-shrink-0 overflow-hidden`}
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
