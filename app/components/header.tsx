import Logo from '~/components/logo';
import ThemeToggle from '~/components/theme-toggle';
import { TwitterIcon, GitHubIcon } from '~/components/icons';

const Header = () => {
  return (
    <div className="flex justify-between pt-10 pb-12" style={{ height: '136px' }}>
      <Logo withName={true} />
      <div className="mt-3 flex space-x-3">
        <a href="https://twitter.com/iansu" className="inline-block h-5 w-5 md:h-6 md:w-6">
          <TwitterIcon size="100%" />
        </a>
        <a href="https://github.com/iansu" className="inline-block h-5 w-5 md:h-6 md:w-6">
          <GitHubIcon size="100%" />
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
