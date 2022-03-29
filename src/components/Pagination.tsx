import { Button, Flex, HStack } from "@chakra-ui/react";

const Pagination = () => {
  const PagButton = (props: any) => {
    return (
      <Button
        cursor={props.disabled && "not-allowed"}
        {...(props.active ? { variant: "solid" } : { variant: "outline" })}
        size="sm"
      >
        {props.children}
      </Button>
    );
  };
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <HStack spacing={2}>
        <PagButton>{"<"}</PagButton>
        <PagButton>1</PagButton>
        <PagButton active>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>{">"}</PagButton>
      </HStack>
    </Flex>
  );
};

export default Pagination;
