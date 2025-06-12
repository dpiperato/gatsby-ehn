import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Styles from './mobileMenu.styles';

// Based on: https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const MobileMenu = ({ open }) => {
  const data = useStaticQuery(graphql`
    query MobileNavQuery {
      wp {
        globalContent {
          globalContact {
            phone
          }
        }
      }
    }
  `);

  return (
    <Styles open={open}>
      <ul className="list-unstyled text-center">
        <li>
          <Link to={`/about-us/`} activeClassName="active">
            About Us
          </Link>
        </li>
        <li>
          <Link to={`/addiction-treatment/`} activeClassName="active">
            Addiction Treatment
          </Link>
        </li>
        <li>
          <Link to={`/drug-rehab/`} activeClassName="active">
            Drug Rehab
          </Link>
        </li>
        <li>
          <Link to={`/drug-detox/`} activeClassName="active">
            Drug Detox
          </Link>
        </li>
        <li>
          <Link to={`/mat-treatment/`} activeClassName="active">
            MAT Treatment
          </Link>
        </li>
        <li>
          <Link to={`/our-process/`} activeClassName="active">
            Our Process
          </Link>
        </li>
        <li>
          <Link to={`/what-to-bring/`} activeClassName="active">
            What to Bring
          </Link>
        </li>
        <li>
          <Link to={`/friends-and-family/`} activeClassName="active">
            Friends and Family
          </Link>
        </li>
        <li>
          <Link to={`/our-location/`} activeClassName="active">
            Our Location
          </Link>
        </li>
      </ul>
      <a
        href={`tel:${data.wp.globalContent.globalContact.phone}`}
        className={`btn btn-success btn-sm btn-call`}
      >
        Call {data.wp.globalContent.globalContact.phone}
      </a>
    </Styles>
  );
};

MobileMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
