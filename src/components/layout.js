import React from "react"
import Header from "./Header"
import { PortfolioProvider } from "../context/context"
import SideBar from "./SideBar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <PortfolioProvider>
        <Header />
        <SideBar />
        <main style={{ padding: 0 }}>{children}</main>
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
