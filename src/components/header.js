import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="wrapper">
    <header>
      <div
        style={{
          margin: `0 auto`,
          // padding: `5rem 5rem 2rem 5rem`,
          // maxWidth: '960'
        }}
        className="container"
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#000000`,
              fontSize: `47px`,
              fontWeight: 'lighter',
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
          <h3 style={{
          color: 'lightgray',
          fontSize: '13px',
          paddingTop: '15px'
        }}>
          designer.
        </h3>
        </h1>
        
        <nav
          style={{
            color: `#000000`,
            textDecoration: `none`,
            // overflow: 'hidden',
            paddingTop: '15px',
          }}>
          <ul style={{
            // display: 'flex',
            paddingTop: '15px',
            // justifyContent: 'center',
          }}>
            <li>
              <Link className="header-link" to="/">
                DESIGNED OBJECTS
            </Link>
            </li>
            <li>
              <Link className="header-link" to="/videos">
                VIDEO
            </Link>
            </li>
            <li>
              <Link className="header-link" to="/about">
                ABOUT ME
            </Link>
            </li>
            <li>
              <Link className="header-link" to="/contact">
                CONTACT
            </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <hr style={{width:'83%', margin:'0 auto', maxWidth: '920px'}}/>
    <div style={{paddingBottom:'2rem'}}></div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
