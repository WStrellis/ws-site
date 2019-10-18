import { Link } from "gatsby"
import React, { Component } from "react"
import instagramIcon from "../../images/icons/instagram-round-white-24px.svg"
import youtubeIcon from "../../images/icons/youtube-icon-24px.svg"
import githubIcon from "../../images/icons/github-icon-24px.svg"

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={styles.siteFooter}>
        <nav className={styles.footerNav}>
          <Link to="/">
            <h4>Westley Strellis</h4>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.footerNav2}>
          <a
            href="https://github.com/wstrellis"
            title="https://github.com/wstrellis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              className={styles.footerIcon}
              width="24px"
              alt="github-social-link"
            />
          </a>
        </nav>
      </footer>
    )
  }
}

export default Footer
