import ProfilePicture from '~/components/profile-picture';
import Bio from '~/components/bio';

export interface ProfileProps {
  more?: boolean;
}

export const defaultProps: ProfileProps = {
  more: false,
};

const Profile = (props: ProfileProps) => {
  const { more } = props;

  return (
    <div className="content-links flex flex-col rounded-lg bg-gray-100 px-4 py-4 text-lg dark:bg-gray-800 md:flex-row">
      <ProfilePicture />
      <div className="mt-4 leading-6 text-gray-700 dark:text-gray-300 md:ml-8">
        <Bio more={more} />
      </div>
    </div>
  );
};

Profile.defaultProps = defaultProps;

export default Profile;
