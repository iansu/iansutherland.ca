const getTitle = (...args: string[]): string => {
  if (args.length === 0) {
    return 'Ian Sutherland &ndash; Always Be Coding';
  } else {
    return [...args, 'Ian Sutherland'].join(' &ndash; ');
  }
};

const getDescription = (): string => {
  return 'I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the maintainer of Create React App and I contribute to Node.js. I also work on a number of other open source projects, mostly in the JavaScript ecosystem.';
};

export { getTitle, getDescription };
