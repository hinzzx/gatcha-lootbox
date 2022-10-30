import { motion } from "framer-motion";
import React from "react";
import {
  MainContainer,
  InnerContainer,
  Title,
  GetStartedButton,
  Linkche,
} from "../styles/Home.styles";

const Home = () => {
  return (
    <MainContainer>
      <InnerContainer>
        <Title
          as={motion.h1}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.185 }}
        >
          GET STARTED
        </Title>
        <Linkche to="/lootboxes">
          <GetStartedButton
            as={motion.a}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.185 }}
          >
            LOOT NOW
          </GetStartedButton>
        </Linkche>
      </InnerContainer>
    </MainContainer>
  );
};

export default Home;
