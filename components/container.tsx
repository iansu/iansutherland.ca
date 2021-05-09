export interface ContainerProps {
  children?: React.ReactNode;
  paddingBreakpoint?: string;
  width?: string;
}

export const defaultProps: ContainerProps = {
  paddingBreakpoint: 'md',
  width: '3xl',
};

const Container = (props: ContainerProps) => {
  props = { ...defaultProps, ...props };
  const { children, paddingBreakpoint, width } = props;

  return (
    <div
      className={`container max-w-${width} min-h-screen mx-auto px-4 ${paddingBreakpoint}:px-0 flex flex-col`}
    >
      {children}
    </div>
  );
};

export default Container;
