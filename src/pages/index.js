import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Loading from "../components/loading/Loading"
import { useTimeout } from "ahooks"
import About from "../components/About"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Sertificate from "../components/Sertificate"

const IndexPage = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  useTimeout(() => {
    setIsLoading(false)
  }, 4500)

  return isLoading ? (
    <Loading />
  ) : (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Projects />
      <Sertificate />
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
