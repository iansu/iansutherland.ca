import Link from 'next/link';
import Image from 'next/image';
import { GitHubIcon, TwitterIcon } from './icons';

const Header = () => {
  return (
    <div className="flex justify-between pt-10 pb-12">
      <Link href="/">
        <a className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16">
            <Image src="/ian-sutherland-logo.svg" width={48} height={48} priority={true} />
          </div>
          <h1 className="font-bold text-2xl md:text-3xl mt-1 ml-3 md:mt-2 md:ml-0">
            Ian Sutherland
          </h1>
        </a>
      </Link>
      <div className="flex mt-3 space-x-3">
        <a
          href="https://twitter.com/iansu"
          className="inline-block w-5 h-5 md:w-6 md:h-6 hover:text-blue-500"
        >
          <TwitterIcon size="100%" />
        </a>
        <a
          href="https://github.com/iansu"
          className="inline-block w-5 h-5 md:w-6 md:h-6 hover:text-blue-500"
        >
          <GitHubIcon size="100%" />
        </a>
      </div>
    </div>
  );
};

export default Header;
