export interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div className="flex-grow">{children}</div>;
};

export default Content;
