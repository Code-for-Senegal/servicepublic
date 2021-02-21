import React from "react"
import Layout from "../components/layouts/layout"
import Homethemelist from '../stories/Homethemelist/Homethemelist'
import SEO from "../components/seo"

// Import Data
import Themes from "../content/particuliers.yml"

export default function Home() {
  return (
  <Layout>
    <SEO title="Accueil" />
    <Homethemelist list={Themes.topics}/>
  </Layout>
  )
}
