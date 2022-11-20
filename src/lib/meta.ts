const getTitle = (title?: string) => {
  const titleParts = ['Ian Sutherland', 'Always Be Coding'];
  const joiner = ' - ';

  if (title) {
    titleParts.unshift(title);
  }

  return titleParts.join(joiner);
};

const getDescription = (description?: string) => {
  const defaultDescription =
    'I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the maintainer of Create React App and I contribute to Node.js. I also work on a number of other open source projects, mostly in the JavaScript ecosystem.';

  return description || defaultDescription;
};

export { getTitle, getDescription };
