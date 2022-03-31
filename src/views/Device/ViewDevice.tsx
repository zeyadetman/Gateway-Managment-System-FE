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
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deviceAPIInstance } from "../../api/device";
import ErrorMsg from "../../components/ErrorMsg";
import { formatDate } from "../../utils";

function ViewDevice() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = React.useState<boolean>(false);
  const [device, setDevice] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchDeviceData = async (id: number) => {
      setLoading(true);
      try {
        const { data } = await deviceAPIInstance.getDeviceByUid(id);
        setDevice(data);
      } catch (error) {
        setDevice(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDeviceData(Number(id));
  }, [id]);

  return (
    <VStack spacing={12}>
      {loading ? (
        <p>Loading...</p>
      ) : device ? (
        <>
          <Heading>View Device</Heading>
          <VStack align={"flex-start"} spacing={2} w="full">
            <Stat>
              <StatLabel>Uid</StatLabel>
              <StatNumber>{device?.uid}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Vendor</StatLabel>
              <StatNumber>{device?.vendor}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Status</StatLabel>
              <StatNumber>{device?.status}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Gateway Serial Number</StatLabel>
              <ChakraLink
                as={Link}
                to={`/gateway/${device?.gatewaySerialNumber}`}
              >
                <StatNumber>{device?.gatewaySerialNumber}</StatNumber>
              </ChakraLink>
            </Stat>
            <Stat>
              <StatLabel>Created At</StatLabel>
              <StatNumber>{formatDate(device?.createdAt)}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Updated At</StatLabel>
              <StatNumber>{formatDate(device?.updatedAt)}</StatNumber>
            </Stat>
          </VStack>
          <VStack>
            <ErrorMsg
              error={error}
              onClose={() => {
                setError(null);
              }}
            />
            <HStack>
              <Button as={Link} to={`/device/${device?.uid}/edit`}>
                Update
              </Button>
              <Button
                variant="outline"
                bg="red"
                _hover={{ bg: "redLight" }}
                _active={{ bg: "redLight" }}
                isLoading={loadingDelete}
                onClick={async () => {
                  setLoadingDelete(true);
                  try {
                    await deviceAPIInstance.deleteDeviceByUid(device?.uid);
                    navigate("/gateways");
                  } catch (error) {
                    setError("Something went wrong");
                  } finally {
                    setLoadingDelete(false);
                  }
                }}
              >
                Delete Device
              </Button>
            </HStack>
          </VStack>
        </>
      ) : (
        <Heading>No Device Found!</Heading>
      )}
    </VStack>
  );
}

export default ViewDevice;
