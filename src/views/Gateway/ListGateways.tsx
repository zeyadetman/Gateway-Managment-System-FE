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
import React, { useEffect } from "react";
import { gatewayAPIInstance } from "../../api/gateway";
import Pagination from "../../components/Pagination";

function ListGateways() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [gateways, setGateways] = React.useState<any[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [total, setTotal] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(10);

  const fetchGateways = async (page: number) => {
    setLoading(true);
    try {
      const { data } = await gatewayAPIInstance.getGateways(page);
      setGateways(data.data);
      setTotal(data.count);
      setLimit(data.limit);
      setCurrentPage(data.page);
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGateways(currentPage);
  }, [currentPage]);

  const renderGateways = (gateways: any[]) => {
    return gateways.map((gateway: any) => {
      return (
        <Tr key={gateway?.serialnumber}>
          <Td>{gateway?.serialnumber}</Td>
          <Td>{gateway?.name}</Td>
          <Td>{gateway?.ip4}</Td>
          <Td isNumeric>{gateway?.devices?.count || 0}</Td>
          <Td>{gateway?.createdAt}</Td>
          <Td>{gateway?.updatedAt}</Td>
        </Tr>
      );
    });
  };

  return (
    <VStack spacing={12}>
      <Heading>List Gatways</Heading>
      {loading ? (
        <p>loading...</p>
      ) : gateways.length === 0 ? (
        <p>No gateways</p>
      ) : (
        <>
          <TableContainer w={["xs", "full"]}>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Serial Number</Th>
                  <Th>Name</Th>
                  <Th>IPV4</Th>
                  <Th isNumeric>Devices Count</Th>
                  <Th>Created At</Th>
                  <Th>Updated At</Th>
                </Tr>
              </Thead>
              <Tbody>{renderGateways(gateways)}</Tbody>
            </Table>
          </TableContainer>
          <Pagination total={total} limit={limit} currentPage={currentPage} />
        </>
      )}
    </VStack>
  );
}

export default ListGateways;
