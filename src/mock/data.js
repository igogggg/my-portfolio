import React from "react"
import CodepenIcon from "../components/icons/CodepenIcon"
import FacebookIcon from "../components/icons/FacebookIcon"
import GitIcon from "../components/icons/GitIcon"
import InstagramIcon from "../components/icons/InstagramIcon"
import TelegramIcon from "../components/icons/TelegramIcon"

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "about" },
  { text: "Projects", path: "projects" },
  { text: "Certificate", path: "certificate" },
  { text: "Contact", path: "contact" },
]

export const social = [
  { icon: <GitIcon />, url: "https://igogggg.github.io" },
  {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/profile.php?id=1100007950664111",
  },
  { icon: <TelegramIcon />, url: "https://t.me/igogggg" },
  { icon: <InstagramIcon />, url: "goncharenko4546" },
  {
    icon: <CodepenIcon />,
    url: "https://codepen.io/igogggg/pens/public",
  },
]

export const skills = ["Html", "Css", "Javascript", "React", "Gatsby", "Next"]

export const projects = [
  { url: "https://igogggg.github.io/velo/", git: "git", tech: "Html Css " },
  {
    url: "https://sharp-wiles-0ab356.netlify.app//",
    git: "git",
    tech: "React Tailwind",
  },
  {
    url: "https://igogggg.github.io/travel/",
    git: "git",
    tech: "Html Css Javascript",
  },
  {
    url: "https://igogggg.github.io/Waxom/#",
    git: "git",
    tech: "Html Css Javascript",
  },
]
