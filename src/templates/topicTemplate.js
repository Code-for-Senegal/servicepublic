import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/seo"

const topicTemplate= props => {
    
    const { pageContext } = props
    const { title, icon, subtopics } = pageContext

    return (
        <Layout>
            <SEO title="Accueil" />
            <h1>{title}</h1>
        </Layout>
    )
}

export default topicTemplate