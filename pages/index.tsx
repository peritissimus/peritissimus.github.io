import { NextPage } from "next";
import {
  Flex,
  Container,
  Box,
  Heading,
  List,
  ListItem,
  Icon,
  Link,
  AspectRatio,
  useColorModeValue,
} from "@chakra-ui/react";
import Main from "../components/layouts/Main";
import Beta from "../components/v0";

const Home: NextPage = () => (
  <Main title="Dubverse | Prototype V0">
    <Box p={8}>
      <Beta />
    </Box>
  </Main>
);

export default Home;
