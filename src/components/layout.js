import React from "react"
import Header from "./Header"
import { PortfolioProvider } from "../context/context"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <PortfolioProvider>
        <Header />

        <main>{children}</main>
        <footer>
          © {new Date().getFullYear().toString()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </PortfolioProvider>
    </>
  )
}

export default Layout
