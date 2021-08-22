import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

interface ThemeToggleProps {
  className?: string;
  iconSize?: string;
}

export const defaultProps: ThemeToggleProps = {
  className: 'cursor-pointer',
  iconSize: '100%',
};

const ThemeToggle = (props: ThemeToggleProps) => {
  const { className, iconSize } = props;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ height: iconSize }}></div>;
  }

  return (
    <div className="w-6 h-6 md:w-7 md:h-7" style={{ marginTop: '-1px' }}>
      {(!resolvedTheme || resolvedTheme === 'light') && (
        <MoonIcon
          width={iconSize}
          height={iconSize}
          className={className}
          onClick={() => setTheme('dark')}
        />
      )}
      {resolvedTheme === 'dark' && (
        <SunIcon
          width={iconSize}
          height={iconSize}
          className={className}
          onClick={() => setTheme('light')}
        />
      )}
    </div>
  );
};

ThemeToggle.defaultProps = defaultProps;

export default ThemeToggle;
