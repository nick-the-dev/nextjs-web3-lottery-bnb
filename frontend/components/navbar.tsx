import { FC } from "react"
import Scrollspy from 'react-scrollspy'

const Navbar: FC = () => {
  return (
    <nav className="header-menu">
      <Scrollspy items={ ['info', 'how-to-play', 'the-team', 'faq'] } currentClassName="active">
        <a href="#info" className="header-link ">Info</a>
        <a href="#how-to-play" className="header-link">How to play</a>
        <a href="#the-team" className="header-link">Team</a>
        <a href="#faq" className="header-link">FAQ</a>
      </Scrollspy>
    </nav>
  )
}

export default Navbar
