import { useState, useEffect } from 'react';
import { Link } from 'remix';

import { TwitterIcon, GitHubIcon } from './icons';

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mt-16 mb-8 flex justify-between border-t pt-4 text-xs text-gray-500 dark:border-gray-600 dark:text-gray-500 md:text-sm">
      <div className="">
        &copy; {currentYear}{' '}
        <Link to="/" className="hover:text-black hover:underline dark:hover:text-gray-400">
          Ian Sutherland
        </Link>
        . All Rights Reserved.
      </div>
      <div className="mt-1 space-x-2">
        <a
          href="https://twitter.com/iansu"
          className="inline-block h-3 w-3 hover:text-black dark:hover:text-white md:h-4 md:w-4"
        >
          <TwitterIcon size="100%" />
        </a>
        <a
          href="https://github.com/iansu"
          className="inline-block h-3 w-3 hover:text-black dark:hover:text-white md:h-4 md:w-4"
        >
          <GitHubIcon size="100%" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
