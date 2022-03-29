import {
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  HStack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

interface Props {}

function ViewDevice(props: Props) {
  const {} = props;

  return (
    <VStack spacing={12}>
      <Heading>View Device</Heading>
      <VStack align={"flex-start"} spacing={2} w="full">
        <Stat>
          <StatLabel>Vendor</StatLabel>
          <StatNumber>Hello</StatNumber>
        </Stat>

        <Stat>
          <StatLabel>Status</StatLabel>
          <StatNumber>OFF</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Devices Count</StatLabel>
          <StatNumber>4</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Gateway Serial Number</StatLabel>
          <ChakraLink as={Link} to={"/gateway/123"}>
            <StatNumber>12321312321312312</StatNumber>
          </ChakraLink>
        </Stat>
      </VStack>
      <HStack>
        <Button>Update</Button>
        <Button variant="outline">Delete Device</Button>
      </HStack>
    </VStack>
  );
}

export default ViewDevice;
