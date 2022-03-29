import { Center } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Center h="100vh">
      <Outlet />
    </Center>
  );
}

export default Layout;
