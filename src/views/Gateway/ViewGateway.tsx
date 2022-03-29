import {
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
} from "@chakra-ui/react";
import React from "react";

interface Props {}

function ViewGateway(props: Props) {
  const {} = props;

  return (
    <VStack spacing={12}>
      <Heading>View Gateway</Heading>
      <VStack spacing={6} w="full">
        <HStack w="full">
          <Stat>
            <StatLabel>Serial Number</StatLabel>
            <StatNumber>12321312321312312</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>IPV4</StatLabel>
            <StatNumber>123.321.312.321</StatNumber>
          </Stat>
        </HStack>
        <HStack w="full">
          <Stat>
            <StatLabel>Name</StatLabel>
            <StatNumber>Gateway 1</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Devices Count</StatLabel>
            <StatNumber>4</StatNumber>
          </Stat>
        </HStack>
      </VStack>
      <TableContainer w={["xs", "sm", "full"]}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Uid</Th>
              <Th>Vendor</Th>
              <Th>Gateway Serial Number</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>123.123.431.312</Td>
              <Td>ON</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>123.123.431.312</Td>
              <Td>OFF</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>123.123.431.312</Td>
              <Td>OFF</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>123.123.431.312</Td>
              <Td>ON</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>123.123.431.312</Td>
              <Td>OFF</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>123.123.431.312</Td>
              <Td>OFF</Td>
            </Tr>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>123.123.431.312</Td>
              <Td>ON</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>123.123.431.312</Td>
              <Td>OFF</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>123.123.431.312</Td>
              <Td>OFF</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
}

export default ViewGateway;
