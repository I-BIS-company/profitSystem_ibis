import { Flex } from "@chakra-ui/react";
import { FC, memo } from "react";
import { LoginButton } from "../atoms/button/LoginButton";

export const Login: FC = memo(() => {
    return (
        <Flex height="100vh" align="center" justify="center">
        <LoginButton />
      </Flex>
    );
});