import React from 'react'
import  { useState } from 'react'
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    LogoImg,
  } from "../styles/Navbar.styles"

  import {VscMenu, VscChromeClose} from "react-icons/vsc"
  import { motion } from 'framer-motion'
  import LOGO from '../assets/LOGO-01.svg'
 

const Navbar = () => {
    const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo to="/" onClick={() => {setExtendNavbar((curr) => !curr)}}><LogoImg src={LOGO} /></Logo>
        </LeftContainer>
        <RightContainer>
        <NavbarLinkContainer> 
          {/* Navigation menu */}
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/lootboxes" > Lootbox</NavbarLink>
            <NavbarLink to="/lootboxes" > Lootbox</NavbarLink>

            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <VscChromeClose style={{fontSize: "1.5rem", marginBottom: "0.5rem"}}/> : <VscMenu style={{fontSize: "1.5rem", marginBottom: "0.5rem"}}/>} 
            </OpenLinksButton>
          </NavbarLinkContainer>
          
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer as={motion.div} 
        initial={{y: -100, opacity: 0.7}}
        animate={{ y: 100, opacity: 1 }}
        exit={{y: 0, opacity:0}}>
          {/* Navigation */}
          <NavbarLinkExtended to="/" onClick={() => {setExtendNavbar((curr) => !curr)}}> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/lootboxes" onClick={() => {setExtendNavbar((curr) => !curr)}}> Lootbox</NavbarLinkExtended>
         
          
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default Navbar