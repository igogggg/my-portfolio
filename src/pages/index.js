import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Loading from "../components/loading/Loading"
import { useTimeout } from "ahooks"
import About from "../components/About"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Certificate from "../components/Certificate"
import Contact from "../components/Contact"

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
      <Certificate />
      <Contact/>
      
    </Layout>
  )
}

export default IndexPage
