import Link from "next/link";
import Image from "next/image";
import { useColorModeValue, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import logo from "../lib/images/logo.svg";
import logoDark from "../lib/images/logo-dark.svg";

const LogoBox = styled.span`
  height: 30px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(-1.5deg);
  }
`;

const Logo = () => {
  const logoImg = useColorModeValue(logoDark, logo);

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} height={32} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
