import { Flex, Text } from "@chakra-ui/react";
import { memo, FC, useState, useEffect } from "react";
import { UserName } from "../atoms/UserName";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Header: FC = memo(() => {
  const [userName, setUserName] = useState<string | null>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      }
    });
  }, []);

  return (
    <Flex
      width="100%"
      height="50px"
      bg="white"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={16}
    >
      {/* 左側の要素 */}
      <Text>アイビス株式会社</Text>

      {/* 右側の要素 */}
      <Flex w={140} justifyContent="space-between" alignItems="center">
        {userName && <UserName userName={userName} />}
      </Flex>
    </Flex>
  );
});
