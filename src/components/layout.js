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
        <footer className="footer">
          Igor Goncharenko {""} © {new Date().getFullYear().toString()}
        </footer>
      </PortfolioProvider>
    </>
  )
}

export default Layout
