import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export const UserName:FC = () => {
    return(
        <>
        <Icon as={FontAwesomeIcon} icon={faCircleUser} boxSize={5} />
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