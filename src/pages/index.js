import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../scss/blog.module.scss"
import Seo from "../components/SEO"
import Button from "../components/Button/button"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Seo />

      {/* Hero container */}
      <div className={styles.sectionHero}>
        
        {/* Hero title */}
        <div className={styles.sectionHero_title}>
          <p className={styles.titleFirst}>
            Hai,
          </p> 
          <p className={styles.titleSecond}>
            I'm a Passionated
          </p>
          <p className={styles.titleThird}>
            Mobile & Web Developer
          </p>
        </div>
        {/* Hero images */}
        <div className={styles.sectionHero_img}>
          <img src={require('../content/images/undraw_design_notes_8dmv.png')} className={styles.img} />
        </div>

      </div>

      
      
     {/* <h4 className={styles.feature}>
        {data.allMarkdownRemark.totalCount} Featured Posts
      </h4> 

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article className={styles.item}>
          <div className={styles.title}>
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
          </div>
          <div className={styles.content}>
            <p>{node.excerpt}</p>
            <div className={styles.meta}>
              <Link className="btn-link" to={node.frontmatter.path}>
                <Button />
              </Link>
              <h4>{node.frontmatter.date}</h4>
            </div>
          </div>
        </article>
      ))}  */}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YY")
            path
          }
          excerpt
        }
      }
    }
  }
`
