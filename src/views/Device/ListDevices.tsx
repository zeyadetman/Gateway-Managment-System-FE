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

function ListDevices(props: Props) {
  const {} = props;

  return (
    <VStack spacing={12}>
      <Heading>List Devices</Heading>
      <TableContainer w={["xs", "full"]}>
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
          </Tbody>
        </Table>

        <Pagination />
      </TableContainer>
    </VStack>
  );
}

export default ListDevices;
