import styled from "styled-components";
import { Link } from "react-router-dom";

export const colors = {
  primary: "#00d49b",
};

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 1rem;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "60px")};
  background-color: transparent;
  display: flex;
  flex-direction: column;
  z-index: 10;
  -webkit-box-shadow: -1px 2px 48px -25px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: -1px 2px 48px -25px rgba(0, 0, 0, 0.72);
  box-shadow: -1px 2px 48px -25px rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(3px);
  font-weight: 1000;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  @media (min-width: 720px) {
    height: 60px;
  }
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 40%;
`;

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 0.985rem;
  text-decoration: none;
  margin: 1rem;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    top: 100%;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:hover:active {
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 3px;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 0.985rem;
  text-decoration: none;
  margin: 1rem;
  display: inline-block;
  position: relative;
 
}
&:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  top: 100%;
  bottom: 0;
  left: 0;
  background-color: #c1eaff;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
&:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
`;

export const Logo = styled(Link)`
  margin: 7px;
  max-width: 100px;
  height: auto;
`;

export const LogoImg = styled.img`
  margin: 0.438rem;
  margin-left: 2rem;
  width: 270%;
  height: 73%;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  font-size: 45px;
  border: none;
  color: white;
  cursor: pointer;
  @media (min-width: 720px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 720px) {
    display: none;
  }
`;
