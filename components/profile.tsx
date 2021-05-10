import ProfilePicture from '@components/profile-picture';
import Bio from '@components/bio';

export interface ProfileProps {
  more?: boolean;
}

export const defaultProps: ProfileProps = {
  more: false,
};

const Profile = (props: ProfileProps) => {
  const { more } = props;

  return (
    <div
      className="flex flex-col md:flex-row px-4 py-4 text-lg rounded-lg content-links"
      style={{ backgroundColor: '#f4f6f8' }}
    >
      <ProfilePicture />
      <div className="mt-4 md:ml-8 leading-6 text-gray-700">
        <Bio more={more} />
      </div>
    </div>
  );
};

Profile.defaultProps = defaultProps;

export default Profile;
