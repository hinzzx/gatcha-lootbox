import styled from "styled-components";

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

export const InnerContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  gap: 2rem;
`;

export const Card = styled.div`
  width: 320px;
  height: 320px;
  background-color: rgba(255, 255, 255, 0.23);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 2px 29px -11px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 29px -11px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 29px -11px rgba(0, 0, 0, 0.75);

  & .card-header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.775rem;

    & img {
      width: 50px;
      height: 41px;
    }
  }

  & .card-body {
    width: 100%;
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    & p {
      padding: 0 1rem;
      font-style: italic;
    }

    & .card-body-title {
      padding: 0 1rem;
      margin: 0;
      margin-top: 2rem;
    }

    & .bottom {
      width: 100%;
      height: 42px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

        & h3 {
            font-size: 0.975rem;
            font-style: italic;
        } 

      & button {
        width: fit-content;
        height: 26px;
        background-color: #00d49b;
        font-family: 'Montserrat', sans-serif;
        letter-spacing: 0.1rem;
        font-weight: 600;
        border: none;
        color: #fff;
        border-radius: 0.313rem;
        cursor: pointer;
      }
    }
  }
`;
