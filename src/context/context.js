import React from "react"
import { useContext } from "react"
import { links, social, skills,projects } from "../mock/data"

const PorfolioContext = React.createContext()

const PortfolioProvider = ({ children }) => {
  const [isSideBarOpen, setSideBarOpen] = React.useState(false)
  const Open = () => setSideBarOpen(!isSideBarOpen)

  return (
    <PorfolioContext.Provider
      value={{ links, Open, isSideBarOpen, social, skills,projects }}
    >
      {children}
    </PorfolioContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(PorfolioContext)
}

export { PorfolioContext, PortfolioProvider }
