import React from "react"
import CodepenIcon from "../components/icons/CodepenIcon"
import FacebookIcon from "../components/icons/FacebookIcon"
import GitIcon from "../components/icons/GitIcon"
import InstagramIcon from "../components/icons/InstagramIcon"
import TelegramIcon from "../components/icons/TelegramIcon"

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Works", path: "/works" },
  { text: "Certificate", path: "/certificate" },
  { text: "Contacts", path: "/contacts" },
]

export const social = [
  { icon: <GitIcon />, url: "#" },
  { icon: <FacebookIcon />, url: "#" },
  { icon: <TelegramIcon />, url: "#" },
  { icon: <InstagramIcon />, url: "#" },
  { icon: <CodepenIcon />, url: "#" },
]
