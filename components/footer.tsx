import Link from 'next/link';

import { GitHubIcon, TwitterIcon } from '@components/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between mt-16 mb-8 pt-4 border-t text-xs md:text-sm text-gray-500">
      <div className="">
        &copy; {currentYear}{' '}
        <Link href="/">
          <a className="hover:underline hover:text-black">Ian Sutherland</a>
        </Link>
        . All Rights Reserved.
      </div>
      <div className="space-x-2 mt-1">
        <a href="https://twitter.com/iansu" className="inline-block w-3 h-3 md:w-4 md:h-4">
          <TwitterIcon size="100%" hoverColor="#000" />
        </a>
        <a href="https://github.com/iansu" className="inline-block w-3 h-3 md:w-4 md:h-4">
          <GitHubIcon size="100%" hoverColor="#000" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
