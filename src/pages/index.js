import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage src='../images/gatsby-icon.png' alt='Gatsby Logo' />
  </Layout>
)

export default IndexPage
