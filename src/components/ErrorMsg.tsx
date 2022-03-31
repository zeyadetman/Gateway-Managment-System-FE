import { Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  error: string | null;
  onClose: () => void;
}

function ErrorMsg(props: Props) {
  const { error, onClose } = props;
  if (!error) return null;

  return (
    <HStack
      w="full"
      justify={"space-between"}
      bgColor="red"
      py="1"
      px="3"
      borderRadius="8px"
    >
      <Text color="white">{error}</Text>
      <Button size={"sm"} variant="ghost" onClick={onClose}>
        X
      </Button>
    </HStack>
  );
}

export default ErrorMsg;
