import classNames from "classnames";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar>{children}</Navbar>
      <main>
        <Page>{children}</Page>
      </main>
    </div>
  );
};

export default Layout;
