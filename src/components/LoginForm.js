import { motion } from "framer-motion";
import React from "react";
import { Form, Label, Input, Button } from "../styles/LoginForm.styles.js";
import { useState, useEffect } from "react";
import Lootboxes from "./Lootboxes.js";

const LoginForm = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [credits, setCredits] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const onLogin = (e) => {
    e.preventDefault();
    if (username && password) {
        setCredits(1000);
        setLoginStatus(true);
        alert(`Login Successful and 1000 credits added to your account`);
    } else {
        setLoginStatus(false);
        setCredits(0);
        alert("Please eneter your credentials");
    }

    return loginStatus && credits;
};

// Storing the state in local storage, so it doesnt reset when the page is refreshed

useEffect(() => {
    const loginStatusData = localStorage.getItem("loginStatus");
    const creditsData = localStorage.getItem("credits");
    if (loginStatusData && creditsData) {
        setLoginStatus(JSON.parse(loginStatusData));
        setCredits(JSON.parse(creditsData));
    }
}, []);

useEffect(() => {
    window.localStorage.setItem("credits", credits);
    window.localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
}, [credits, loginStatus]);


  return (
    loginStatus === false ? <Form
      as={motion.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.385 }}
    >
      <h3>You have to login first ! Its simple</h3>
      <Label>Username</Label>
      <Input type="text" onChange={(e) => setUsername(e.target.value)}/>

      <Label>Password</Label>
      <Input type="password" onChange={(e) => setPassword(e.target.value)}/>

      <Button onClick={onLogin}>LOGIN</Button>
    </Form> : <Lootboxes />
  );
};

export default LoginForm;
