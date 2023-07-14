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
      minW="1000px"
      h="550px"
      shadow="md"
      flexWrap="wrap"
      py="75px"
    >
      {children}
    </Flex>
  );
});
