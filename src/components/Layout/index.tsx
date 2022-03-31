import { Center, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <VStack maxW={"1920px"} py="2" px={[2, 4]} margin="0px auto">
      <Heading alignSelf="flex-start" py={[2, 4]} px={[4, 8]} h="80px">
        GMS
      </Heading>
      <Center minH="calc(100vh - 150px)" py="4">
        <Outlet />
      </Center>
      <footer>
        <a
          href="https://github.com/zeyadetman"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </VStack>
  );
}

export default Layout;
