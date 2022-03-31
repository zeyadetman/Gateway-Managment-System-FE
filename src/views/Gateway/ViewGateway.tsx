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
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gatewayAPIInstance } from "../../api/gateway";
import { formatDate } from "../../utils";

function ViewGateway() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [gateway, setGateway] = React.useState<any>(null);

  useEffect(() => {
    const fetchGatewayData = async (id: string) => {
      setLoading(true);
      try {
        const { data } = await gatewayAPIInstance.getGatewayBySerialNumber(id);
        setGateway(data);
      } catch (error) {
        setGateway(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchGatewayData(id);
  }, [id]);

  const renderDevicesList = (devices: any[]) => {
    return devices.map((device: any) => {
      return (
        <Tr
          key={device?.uid}
          onClick={() => {
            navigate(`/device/${device?.uid}`);
          }}
          cursor="pointer"
        >
          <Td>{device?.uid}</Td>
          <Td>{device?.vendor}</Td>
          <Td>{device?.status}</Td>
          <Td>{formatDate(device?.createdAt)}</Td>
          <Td>{formatDate(device?.updatedAt)}</Td>
        </Tr>
      );
    });
  };

  return (
    <VStack spacing={12}>
      {loading ? (
        <p>Loading...</p>
      ) : gateway ? (
        <>
          <Heading>View Gateway</Heading>
          <VStack spacing={6} w="full">
            <HStack w="full">
              <Stat>
                <StatLabel>Serial Number</StatLabel>
                <StatNumber>{gateway?.serialnumber}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>IPV4</StatLabel>
                <StatNumber>{gateway?.ip4}</StatNumber>
              </Stat>
            </HStack>
            <HStack w="full">
              <Stat>
                <StatLabel>Name</StatLabel>
                <StatNumber>{gateway?.name}</StatNumber>
              </Stat>
              <Stat>
                <StatLabel>Devices Count</StatLabel>
                <StatNumber>{gateway?.devices?.length}</StatNumber>
              </Stat>
            </HStack>
          </VStack>
          <TableContainer w={["xs", "sm", "full"]}>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Uid</Th>
                  <Th>Vendor</Th>
                  <Th>Status</Th>
                  <Th>Created At</Th>
                  <Th>Updated At</Th>
                </Tr>
              </Thead>
              <Tbody>
                {gateway?.devices && renderDevicesList(gateway.devices)}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Heading>No Gateway Found!</Heading>
      )}
    </VStack>
  );
}

export default ViewGateway;
