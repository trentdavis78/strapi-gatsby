import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Parallax from "../components/parallax"
import Section from "../components/section"
import RowContainer from "../components/rowContainer"
import Card from "../components/card";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Parallax imgPath="assets/images/parallax1.jpg" altTag="Austin Skyline" />
    <Section styleName={"bg-white"}>
      <RowContainer color={"white"}>
        <h6 className="category-header">Recent Articles</h6>
         <Card />       
         <Card />     
         <Card />     
         <Card />     
      </RowContainer>
    </Section>
    <Parallax imgPath="assets/images/parallax2.jpg" altTag="Austin Skyline" />
    <Section styleName={"bg-white"}><div>Lorem ipsum dolerat</div></Section>
  </Layout>
)

export default IndexPage
