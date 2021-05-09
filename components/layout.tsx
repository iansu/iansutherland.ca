import Container from '@components/container';
import Header from '@components/header';
import Footer from '@components/footer';
import Content from '@components/content';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Layout;
