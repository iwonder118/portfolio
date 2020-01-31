import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ }) => (
  <header>
    <nav className="navbar is-transparent is-dark is-fixed-top is-hidden-touch"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="navbar-menu container">
        <div className="navbar-start">
          <Link className="navbar-item has-text-weight-medium is-size-5 navbar-brand"
            to="/" style={{ paddingRight: "40px" }}>
            Wonder-Puffin
          </Link>
          <Link className="navbar-item is-size-6" to="/about/">
            About
          </Link>
          <Link className="navbar-item is-size-6 has-text-warning" to="/works/">
            Works
          </Link>
          <Link className="navbar-item is-size-6" to="/contact/">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
