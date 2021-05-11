import Link from 'next/link';

export interface BioProps {
  more?: boolean;
}

export const defaultProps: BioProps = {
  more: false,
};

const Bio = (props: BioProps) => {
  const { more } = props;

  return (
    <>
      I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the maintainer
      of <a href="https://github.com/facebook/create-react-app">Create React App</a> and a member of
      the <a href="https://github.com/nodejs/node">Node.js</a> team. I also work on a number of
      other open source projects, mostly in the JavaScript and TypeScript ecosystems.{' '}
      {more && (
        <>
          More <Link href="/about">about me</Link>.
        </>
      )}
    </>
  );
};

Bio.defaultProps = defaultProps;

export default Bio;
