import { Box } from "@chakra-ui/react";
import Butto from "./componemt/but";
import Menu from "./componemt/menu";
import Video from "./componemt/video";

function App() {
  return (
    <Box h={{base: '100vh', sm:'auto',md:'100vh'}} bg="#00713C">
      <Menu />
      <Video />
      <Butto />
    </Box>
  );
}

export default App;
