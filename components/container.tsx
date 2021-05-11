export interface ContainerProps {
  children?: React.ReactNode;
  paddingBreakpoint?: string;
  width?: string;
}

export const defaultProps: ContainerProps = {
  paddingBreakpoint: 'md:px-0',
  width: 'max-w-3xl',
};

const Container = (props: ContainerProps) => {
  const { children, paddingBreakpoint, width } = props;

  return (
    <div
      className={`container ${width} min-h-screen mx-auto px-4 ${paddingBreakpoint} flex flex-col`}
    >
      {children}
    </div>
  );
};

Container.defaultProps = defaultProps;

export default Container;
