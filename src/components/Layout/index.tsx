import { Center } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Center minH="100vh" py="4">
      <Outlet />
    </Center>
  );
}

export default Layout;
