import { Box } from "@chakra-ui/react";

export default function Video() {
  return (
    <>
      <Box
        w={{base: '355px', sm: "500px", md:"800px", xl: "950px"}}
        mx={"auto"}
        my={{ base: 24, md: 10 }}
      >
        <video controls>
          <source
            src="https://redebrasilrp.com.br/_assets/feira/vt_parceiros_rede_br.mp4"
            type="video/mp4"

          />
        </video>
      </Box>
    </>
  );
}
