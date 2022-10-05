import { Button, Flex } from "@chakra-ui/react";

export default function Butto() {
  return (
      <Flex
          py={10}
          justify={'center'}
      >
          <Button
              colorScheme="blue"
              fontSize={'2xl'}
              px={10}
              py={7}
              onClick={(e)=> window.location.href = "https://redebrasilrp.com.br/revenda/"}
          >
              Click Para Saber Mais
          </Button>
    </Flex>
  );
}
