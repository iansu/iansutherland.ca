import Link from 'next/link';
import Image from 'next/image';

interface Props {
  more?: boolean;
}

const Profile = ({ more }: Props) => {
  return (
    <div
      className="flex flex-col md:flex-row px-4 py-4 text-lg rounded-lg content-links"
      style={{ backgroundColor: '#f4f6f8' }}
    >
      <div
        className="mx-auto rounded-full bg-gray-200 border-4 border-gray-300 flex-shrink-0 overflow-hidden"
        style={{ width: '128px', height: '128px' }}
      >
        <Image
          src="/ian-sutherland-profile.jpg"
          width={125}
          height={125}
          layout="fixed"
          objectPosition="-5px -2px"
          priority={true}
        />
      </div>
      <div className="mt-4 md:ml-8 leading-6 text-gray-700">
        I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the
        maintainer of <a href="https://github.com/facebook/create-react-app">Create React App</a>{' '}
        and I contribute to <a href="https://github.com/nodejs/node">Node.js</a>. I also work on a
        number of other open source projects, mostly in the JavaScript ecosystem.{' '}
        {more && (
          <>
            More <Link href="/about">about me</Link>.
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
