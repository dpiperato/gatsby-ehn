import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';

import Styles from './navbar.styles';
import { ReactComponent as Logo } from '../../images/endeavor-house-logo.svg';
import rhythm from '../../utils/rhythm';

export default function TopNav() {
  const data = useStaticQuery(graphql`
    query TopNavQuery {
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
    <Styles>
      <Navbar bg="light" expand="xl" sticky="top">
        <Link to={`/`} className={`navbar-brand`}>
          <Logo style={{ height: `${rhythm(3 / 2)}`, width: 'auto' }} />
        </Link>

        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="mr-auto navbar-nav">
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
              <NavDropdown 
                title="What to Expect" 
                id="nav-dropdown"
                caret
              >
                <NavDropdown.Item eventKey="1">
                  <Link to={`/our-process/`} activeClassName="active nav-link">
                    Our Process
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2">
                  <Link to={`/what-to-bring/`} activeClassName="active nav-link">
                    What to Bring
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="3">
                  <Link to={`/friends-and-family/`} activeClassName="active nav-link">
                    Friends and Family
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
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
            Call Now
          </a>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

TopNav.defaultProps = {
  siteTitle: ``,
};

TopNav.propTypes = {
  siteTitle: PropTypes.string,
};
