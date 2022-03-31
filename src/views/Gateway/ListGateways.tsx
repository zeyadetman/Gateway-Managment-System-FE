import {
  Heading,
  Link as ChakraLink,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { gatewayAPIInstance } from "../../api/gateway";
import Pagination from "../../components/Pagination";
import { formatDate, LIMIT } from "../../utils";

function ListGateways() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [gateways, setGateways] = React.useState<any[]>([]);
  const [error, setError] = React.useState<string | null>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [total, setTotal] = React.useState<number>(0);
  const [limit, setLimit] = React.useState<number>(LIMIT);

  const fetchGateways = async (page: number, limit?: number) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await gatewayAPIInstance.getGateways(page, limit);
      setGateways(data.data);
      setTotal(data.count);
      setLimit(data.limit);
      setCurrentPage(data.page);
    } catch (error: any) {
      setError(error?.response?.data?.errors.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log({ currentPage });
    fetchGateways(currentPage, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const renderGateways = (gateways: any[]) => {
    return gateways.map((gateway: any) => {
      return (
        <Tr
          key={gateway?.serialnumber}
          onClick={() => {
            navigate(`/gateway/${gateway?.serialnumber}`);
          }}
          cursor="pointer"
        >
          <Td>{gateway?.serialnumber}</Td>
          <Td>{gateway?.name}</Td>
          <Td>{gateway?.ip4}</Td>
          <Td isNumeric>{gateway?.devices?.length || 0}</Td>
          <Td>{formatDate(gateway?.createdAt)}</Td>
          <Td>{formatDate(gateway?.updatedAt)}</Td>
        </Tr>
      );
    });
  };

  return (
    <VStack spacing={12}>
      <Heading>List Gatways</Heading>
      {loading ? (
        <Text>loading...</Text>
      ) : gateways.length === 0 ? (
        <Text fontSize={"xl"} align="center">
          No gateways.
          <br />
          <ChakraLink as={Link} to="/gateway/new">
            Click Here to create Gateway
          </ChakraLink>
        </Text>
      ) : (
        <>
          <Heading
            fontSize={"xl"}
            borderTopRadius="8"
            bgColor={"highlight"}
            py="2"
            px="4"
            justifyContent={"flex-end"}
            w={["xs", "sm", "md", "full"]}
            display={"flex"}
            alignItems={"center"}
          >
            <ChakraLink as={Link} to={"/gateway/new"}>
              <Text fontSize={"sm"}>Add new Gateway</Text>
            </ChakraLink>
          </Heading>
          <TableContainer w={["xs", "sm", "md", "full"]} mt="0px !important">
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
          <Pagination
            total={total}
            limit={limit}
            currentPage={currentPage}
            paginationProps={{
              onChange: (pageNum: number) => {
                setCurrentPage(pageNum);
              },
            }}
          />
        </>
      )}
    </VStack>
  );
}

export default ListGateways;
