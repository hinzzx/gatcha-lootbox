import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 8rem;
  flex-wrap: wrap;
  font-weight: 800;
  text-decoration: none;

  --common: #fff;
  --uncommon: #00d49b;
  --rare: #00b0ff;
  --epic: #a500ff;
  --legendary: #ff8c00;

  & .card-body .common {
    background-color: var(--common);
    /* add glass effect to the background */
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    
    width: 100%;
    border-radius: 0 0 1rem 1rem;
    }

  & .card-body .uncommon {
    background-color: var(--uncommon);
    width: 100%;
  }

  & .card-body .rare {
    background-color: var(--rare);
    width: 100%;
  }

  & .card-body .epic {
    background-color: var(--epic);
    width: 100%;
  }

  & .card-body .legendary {
    background-color: var(--legendary);
    width: 100%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  flex-wrap: wrap;
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
    justify-content: space-evenly;
    align-items: center;
    font-size: 0.775rem;

    & img {
      width: 50px;
      height: 41px;
    }

    & h1 {
      text-transform: uppercase;
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

export const LogoutButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: #DC3545;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1rem;
  font-weight: 600;
  border: none;
  color: #fff;
  text-transform: uppercase;
  border-radius: 0.313rem;
  cursor: pointer;
`;

// Invertory, which displays looted items' images, with tooltips their names

export const Inventory = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;

  /* backgrounds for every item rarity */

  & .common {
    background-color: var(--common);
    border-radius: 0.313rem;
    padding: 0.3rem;
    }

  & .uncommon {
    background-color: var(--uncommon);
    border-radius: 0.313rem;
    padding: 0.3rem;
  }

  & .rare {
    background-color: var(--rare);
    border-radius: 0.313rem;
    padding: 0.3rem;
  }

  & .epic {
    background-color: var(--epic);
    border-radius: 0.313rem;
    padding: 0.3rem;
  }

  & .legendary {
    background-color: var(--legendary);
    border-radius: 0.313rem;
    padding: 0.3rem;
  }

  & .inventory-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img {
      width: 2.75rem;
      height: 2.75rem;
  }
}
`;

