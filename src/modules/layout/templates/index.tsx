import Footer from "@modules/layout/templates/footer";
import Nav from "@modules/layout/templates/nav";
import useHome from "@lib/hooks/use-home";

const Layout: React.FC = ({ children }) => {
  const { isHome } = useHome();

  return (
    <div>
      <Nav />
      <main style={{ paddingTop: !isHome ? '104px' : '0' }} className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
