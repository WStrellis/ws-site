import { Link } from "gatsby"
import React, { Component } from "react"

import styles from "./header.module.scss"

const ListLink = props => {
  return (
    <li>
      <Link to={props.to} activeClassName={styles.activeLink}>
        {props.children}
      </Link>
    </li>
  )
}

class Header extends Component {
  render() {
    return (
      <header className={styles.siteHeader}>
        <nav>
          <ul>
            <ListLink to={`/`}>home</ListLink>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
