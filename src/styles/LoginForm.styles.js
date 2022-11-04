import styled from "styled-components";

export const Form = styled.form`
  height: 500px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  box-sizing: border-box;

  @media screen and (max-width: 480px) {
    width: 80%;
  }

  & * {
    color: #ffffff;
    letter-spacing: 2px;
    outline: none;
    border: none;
    text-decoration: none;
  }

  & h3 {
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
    text-align: center;
  }
`;

export const Label = styled.label`
  display: block;
  margin-top: 1.85rem;
  font-size: 0.775rem;
  font-weight: 500;
  text-transform: uppercase;
`;

export const Input = styled.input`
  display: block;
  height: 50px;
  width: 99%;
  background-color: rgba(255, 255, 255, 0.17);
  border-radius: 0.188rem;
  margin-top: 0.2rem;
  font-size: 0.875rem;
  font-weight: 300;
  /* padding left and right 0.1rem */
  padding: 0 0.765rem;
`;

export const Button = styled.button`
  margin-top: 2.525rem;
  width: 100%;
  background-color: #00d49b;
  padding: 0.938rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.313rem;
  cursor: pointer;
`;
