import React, { useState } from 'react'
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
    LogoutButton,
    AddCreditsButton
  } from "../styles/Navbar.styles"
  import {VscMenu, VscChromeClose} from "react-icons/vsc"
  import { motion } from 'framer-motion'
  import LOGO from '../assets/LOGO-01.svg'


  const onLogout = () => {
    localStorage.clear();
    window.location.reload()
  }

  const addCredits = () => {
    let credits = localStorage.getItem("credits");
    // get login status
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus === "true") {
      credits = parseInt(credits) + 1000;
      localStorage.setItem("credits", credits);
      alert(`1000 credits added to your account, you now have ${credits} credits`);
    } else {
      alert("Please login first");
    }
  };

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
            <AddCreditsButton onClick={addCredits}> Add Credits</AddCreditsButton>
            <LogoutButton onClick={onLogout}>Logout</LogoutButton>
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
          <AddCreditsButton onClick={addCredits}> Add Credits</AddCreditsButton>
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  )
}

export default Navbar