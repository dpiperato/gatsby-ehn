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
      <script>
      {`
      (function(i,n,v,o,c,a) { i.InvocaTagId = o; var s = n.createElement('script'); s.type = 'text/javascript';
      s.async = true; s.src = ('https:' === n.location.protocol ? 'https://' : 'http://' ) + v;
      var fs = n.getElementsByTagName('script')[0]; fs.parentNode.insertBefore(s, fs);
  })(window, document, 'solutions.invocacdn.com/js/invoca-latest.min.js', '1972/1573260581');
      `}
      </script>      
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
