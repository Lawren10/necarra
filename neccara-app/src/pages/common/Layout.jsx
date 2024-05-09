/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import Navigation from "./Navigation";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
 return (
  <>
   <Navigation />
   <main>{children}</main>
   <Footer />
  </>
 );
};

Layout.propTypes = {
 children: PropTypes.node,
};

export default Layout