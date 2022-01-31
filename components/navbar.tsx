import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import Logo from "./logo";
import ThemeToggleButton from "./theme-toggle-button";

const LogoIcon = createIcon({
  displayName: "Dubverse Logo",
  viewBox: "0 0 8.467 8.467",
  path: (
    <path
      fill="currentColor"
      d="M2.277.034a2.21 2.21 0 0 0-2.21 2.21v3.969c0 1.22.99 2.21 2.21 2.21H6.19a2.21 2.21 0 0 0 2.21-2.21V2.244A2.21 2.21 0 0 0 6.19.034zm1.961 2.429h.03a.26.26 0 0 1 .262.26v3.011a.26.26 0 0 1-.261.261h-.03a.26.26 0 0 1-.262-.26V2.722a.26.26 0 0 1 .261-.26zm-1.017.64a.209.209 0 0 1 .204.208v1.835a.207.207 0 0 1-.308.183L1.44 4.41a.208.208 0 0 1 0-.365l1.676-.918a.209.209 0 0 1 .104-.026zm2.065 0c.036 0 .072.008.104.025l1.675.918a.21.21 0 0 1 0 .366l-1.675.917a.208.208 0 0 1-.309-.182V3.31a.209.209 0 0 1 .205-.208z"
    />
  ),
});

const Navbar = (props: any) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#f2f2f2", "#0d0d0d")}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={3}
        maxW="container.xl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Logo />
        </Flex>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display="inline-block" p={2}>
            <Menu isLazy id="navbar-menu">
              <MenuButton>M E N U</MenuButton>
              <MenuList bg={useColorModeValue("#a6a6a6", "#262626")}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Preview</MenuItem>
                </NextLink>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Beta</MenuItem>
                </NextLink>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Website</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
