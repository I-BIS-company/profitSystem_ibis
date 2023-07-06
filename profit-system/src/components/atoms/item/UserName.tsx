import { FC } from "react";
import { UserIcon } from "./UserIcon";
import { Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const UserName:FC = () => {
    return(
        <>
        <UserIcon />
      <Text
        m={0}
        fontSize="14px"
        _hover={{cursor:"pointer"}}
      >
        ユーザ 太郎</Text>
      <ChevronDownIcon />
      </>
    )
}