import { Center, Heading, Image, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import Logo from "../../assets/light-bulb.svg";

const Header = () => {
  return (
    <Fragment>
      <Image src={Logo} alt="Logo" width={100} marginBottom="1rem" />
      <Heading />
      <Text fontSize={25} textAlign="center">
        Paste in your text below and we'll generate the keywords for you.
      </Text>
    </Fragment>
  );
};

export default Header;
