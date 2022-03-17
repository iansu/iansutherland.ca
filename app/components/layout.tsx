import Container from '~/components/container';
import Header from '~/components/header';
import Footer from '~/components/footer';
import Content from '~/components/content';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
