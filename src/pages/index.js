import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

import Button from "@material/react-button"
import Card from "@material/react-card"

import ParticleField from '../components/particle-field/particle.component'



// Styles
import "../styles/app.scss"

function IndexPage( props ){
  // const [ windowSize, setWindowSize ] = useState([])
  const [ showParticles, setShowParticles ] = useState(false)
  // only call GetWindowSize if there is window object. Used to prevent Build() errors
  // const windowSize = (typeof(window) !== 'undefined' && GetWindowSize()) || [0,0]
  const { data } = props
  const posts = data.allMarkdownRemark.edges

  /* mount particles field AFTER this element has rendered
  to prevent 'window is not defined'
  */
  useEffect(()=> setShowParticles(true), [])

    return (
      <Layout>
        <SEO />
        <section className="anoun-home--section1">
          <div className="home--section1-title-text">
            <h2><span className="anoun-title">Westley Strellis</span></h2>
            <h4>Full Stack Software Engineer</h4>
          </div>
        { showParticles && <ParticleField /> }
        </section>
        <section className="anoun-home--section2">
          <h3>I am a builder.</h3>
          <h3>I am a creator.</h3>
          <h3>I am a maker.</h3>
        </section>
        <section className="anoun-home--section3">
          <h2>Blog Posts</h2>
          <div className="blog-posts__container">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link to={node.fields.slug}>
                  <Card
                    className="mdc-card--clickable anoun-blog-card"
                    key={node.fields.slug}
                  >
                    <Img
                      className="mdc-card__media"
                      fluid={
                        node.frontmatter.featured_image.childImageSharp
                          .fluid
                      }
                    />
                    <div className="anoun-blog-card-content__container">
                      <h3>{title}</h3>
                      <small>{node.frontmatter.date}</small>
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            node.frontmatter.description || node.excerpt,
                        }}
                      />
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }

export default IndexPage

export const indexQuery = graphql`
         query {
           allMarkdownRemark(
             filter: { fileAbsolutePath: { regex: "/posts/" } }
             sort: { fields: [frontmatter___date], order: DESC }
           ) {
             edges {
               node {
                 excerpt
                 fields {
                   slug
                 }
                 frontmatter {
                   date(formatString: "MMMM DD, YYYY")
                   title
                   featured_image {
                     childImageSharp {
                       fluid(maxWidth: 1200, quality: 92) {
                         ...GatsbyImageSharpFluid_withWebp
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `
