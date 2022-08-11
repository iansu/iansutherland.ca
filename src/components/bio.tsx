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
      I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m a member of the{' '}
      <a href="https://github.com/nodejs/node">Node.js</a> team and I also work on a number of other
      open source projects, mostly in the JavaScript and TypeScript ecosystems.{' '}
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
