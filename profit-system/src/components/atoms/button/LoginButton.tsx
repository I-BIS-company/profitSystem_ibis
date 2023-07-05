import { Button } from "@chakra-ui/react";
import { FC } from "react";

export const LoginButton:FC= () => {
    return(
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
    )

};