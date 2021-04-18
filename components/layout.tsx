import Header from './header';
import Footer from './footer';
import Content from './content';

const Layout = ({ children }) => {
  return (
    <div className="container max-w-3xl min-h-screen mx-auto px-4 flex flex-col">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
