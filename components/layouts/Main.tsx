import Head from "next/head";
import React, { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Main = ({ children, title = "Dubverse Page" }: Props) => (
  <Box as="main" pb={8}>
    <Head>
      <title> {title} </title>
      <meta charSet="utf" />
      <meta name="viewport" content="initial-scale=1.0,width=device-width" />
    </Head>
    <Navbar />
    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
  </Box>
);

export default Main;
