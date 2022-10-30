import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0;
  font-weight: 800;
  text-decoration: none;
`;

export const Linkche = styled(Link)`
  text-decoration: none;
  `;

export const InnerContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  text-decoration: none;
  margin: 0.65rem 0;
`;

export const GetStartedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: fit-content;
  height: 3rem;
  cursor: pointer;
  letter-spacing: 0.35rem;
  padding: 0 1.5rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  backdrop-filter: blur(3px);
  color: #00d49b;
  background-color: white;

  &:hover{
      background-color: #00d49b;
      color: white;
      cursor: pointer;
  }
  & a {
    text-decoration: none;
    color: #00d49b;
  }
  &:hover a {
  text-decoration: none;
    color: white;
  }
`;
