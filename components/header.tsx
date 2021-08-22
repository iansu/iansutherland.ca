import Logo from '@components/logo';
import { GitHubIcon, TwitterIcon } from '@components/icons';
import ThemeToggle from '@components/theme-toggle';

const Header = () => {
  return (
    <div className="flex justify-between pt-10 pb-12">
      <Logo withName={true} />
      <div className="flex mt-3 space-x-3">
        <a href="https://twitter.com/iansu" className="inline-block w-5 h-5 md:w-6 md:h-6">
          <TwitterIcon size="100%" />
        </a>
        <a href="https://github.com/iansu" className="inline-block w-5 h-5 md:w-6 md:h-6">
          <GitHubIcon size="100%" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
