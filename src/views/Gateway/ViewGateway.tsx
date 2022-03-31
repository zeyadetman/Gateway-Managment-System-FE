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
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
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
          <Heading textAlign="center">
            View Gateway
            <br />
            <ChakraLink fontSize={"sm"} as={Link} to="/gateways">
              Click here to view all gateways
            </ChakraLink>
          </Heading>
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
          {gateway?.devices.length === 0 ? (
            <Text fontSize={"xl"} align="center">
              No Devices.
              <br />
              <ChakraLink
                as={Link}
                to="/device/new"
                state={{ gateway: gateway?.serialnumber }}
              >
                Click Here to create Device
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
                justifyContent={"space-between"}
                w={["xs", "sm", "md", "full"]}
                display={"flex"}
                alignItems={"center"}
              >
                <Text>Devices</Text>
                <ChakraLink
                  as={Link}
                  to={"/device/new"}
                  state={{ gateway: gateway?.serialnumber }}
                >
                  <Text fontSize={"sm"}>Add new device</Text>
                </ChakraLink>
              </Heading>
              <TableContainer
                w={["xs", "sm", "md", "full"]}
                mt="0px !important"
              >
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
                  <Tbody>{renderDevicesList(gateway.devices)}</Tbody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      ) : (
        <Heading>No Gateway Found!</Heading>
      )}
    </VStack>
  );
}

export default ViewGateway;
