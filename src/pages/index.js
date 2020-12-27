import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Loading from "../components/loading/Loading"
import { useTimeout } from "ahooks"

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
      <h1>Hi people</h1>
      <p>HI Its mi</p>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <h1>NEW</h1>
      <div></div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
