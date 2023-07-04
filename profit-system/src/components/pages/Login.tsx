import {  Button, Flex } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Login: FC = memo(() => {
    return (
        <Flex height="100vh" align="center" justify="center">
        <Button
          bg="orange.300"
          color="blackAlpha.900"
          size="lg"
          py={8}
          px={24}
          shadow="md"
          _hover={{opacity:.8}}
          >
          ログイン
        </Button>
      </Flex>
    );
});