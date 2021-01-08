import React from "react"
import { useContext } from "react"
import { links } from "../mock/data"

const PorfolioContext = React.createContext()

const PortfolioProvider = ({ children }) => {
  const [isSideBarOpen, setSideBarOpen] = React.useState(true)
  const Open = () => setSideBarOpen(!isSideBarOpen)
  console.log(isSideBarOpen)
  return (
    <PorfolioContext.Provider value={{ links, Open, isSideBarOpen }}>
      {children}
    </PorfolioContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(PorfolioContext)
}

export { PorfolioContext, PortfolioProvider }
