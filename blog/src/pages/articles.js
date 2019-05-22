import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Articles = ({ data }) => (
  <Layout>
    <SEO title="Articles" />
    <Section styleName={"bg-white"}>
     <RowContainer color={"white"}>
        <ul>
          {data.allStrapiArticle.edges.map(document => (
            <li key={document.node.id}>
              <h2>
                <Link to={`/articles/${document.node.id}`}>{document.node.title}</Link>
              </h2>
              <Img fixed={document.node.image.childImageSharp.fixed}/>
              <p>{document.node.content}</p>
            </li>
          ))}
        </ul>
     </RowContainer>
    </Section>
  </Layout>
)

export default Articles


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`