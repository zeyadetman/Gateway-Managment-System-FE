import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Pagination from "../../components/Pagination";

interface Props {}

function ListGateways(props: Props) {
  const {} = props;

  return (
    <VStack spacing={12}>
      <Heading>List Gatways</Heading>
      <TableContainer w={["xs", "full"]}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Serial Number</Th>
              <Th>Name</Th>
              <Th>IPV4</Th>
              <Th isNumeric>Devices Count</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>123.123.431.312</Td>
              <Td isNumeric>3</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>123.123.431.312</Td>
              <Td isNumeric>8</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>123.123.431.312</Td>
              <Td isNumeric>4</Td>
            </Tr>
          </Tbody>
        </Table>

        <Pagination />
      </TableContainer>
    </VStack>
  );
}

export default ListGateways;
