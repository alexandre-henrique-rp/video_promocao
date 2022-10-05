import { Box, Image } from "@chakra-ui/react";

export default function Menu() {
  return (
    <Box mb={{ base: 0, md: "5rem" }}>
      <Box w={{base: '13rem', md:"20rem"}}>
        <Image
          objectFit="cover"
          src="https://redebrasilrp.com.br/_assets/feira/logo.svg"
        />
      </Box>
    </Box>
  );
}
