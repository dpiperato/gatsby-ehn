import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import GlobalStyles from '../../utils/global.styles';
import Footer from '../footer/footer';
import BurgerButton from '../mobileNav/burgerButton/burgerButton';
import { useOnClickOutside } from '../mobileNav/hooks/useOnClickOutside';
import MobileMenu from '../mobileNav/mobileMenu/mobileMenu';
import TopNav from '../navbar/navbar';
import CallBanner from '../callBanner/callBanner';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setMobileNavOpen(false));

  return (
    <>
      <GlobalStyles />

      <Helmet>
  <script async src="//322114.tctm.xyz/t.js"></script>
</Helmet>


      <div ref={node} className={`d-block d-xl-none`}>
        <BurgerButton setOpen={setMobileNavOpen} open={mobileNavOpen} />
        <MobileMenu open={mobileNavOpen} />
      </div>
      <TopNav siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <CallBanner />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
