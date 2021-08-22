import Link from 'next/link';

export interface LinkBoxProps {
  className?: string;
  description: string;
  as?: string;
  href: string;
  icon: React.ReactElement;
  internal?: boolean;
  title: string;
}

export const defaultProps = {
  as: 'li',
  internal: false,
};

const LinkBox = (props: LinkBoxProps) => {
  const { as, className, description, href, icon, internal, title } = props;

  const Container = as as keyof JSX.IntrinsicElements;

  return (
    <Container
      className={`${className} mb-4 rounded-md border list-none bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-600`}
    >
      {internal ? (
        <Link href={href}>
          <a>
            <div className="flex items-center p-4">
              <div className="mr-6">{icon}</div>
              <div className="block flex-grow">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <a href={href}>
          <div className="flex items-center p-4">
            <div className="mr-6">{icon}</div>
            <div className="block flex-grow">
              <h2 className="text-xl font-bold">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </a>
      )}
    </Container>
  );
};

LinkBox.defaultProps = defaultProps;

export default LinkBox;
