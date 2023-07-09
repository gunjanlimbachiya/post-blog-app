import { Box, Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Alerts from "./Layout/Alerts";
import Navigation from "./Layout/Navigation";

const Home = () => {
  const { show, message, type } = useSelector((state: any) => state.alert);

  return (
    <>
      <Box component="header">
        <Navigation />
      </Box>
      <Container maxWidth="lg">
        <Outlet></Outlet>
        {show && <Alerts message={message} type={type} />}
      </Container>
    </>
  );
};

export default Home;
