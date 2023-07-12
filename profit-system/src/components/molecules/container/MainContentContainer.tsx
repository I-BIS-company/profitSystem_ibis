import { Flex } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

export const MainContentContainer: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Flex
      bgColor="white"
      borderRadius="5px"
      w="80%"
      h="550px"
      shadow="md"
      flexWrap="wrap"
      py="50px"
    >
      {children}
    </Flex>
  );
});
