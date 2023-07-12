import { Flex } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

export const WorkhourFormContainer: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Flex
      w="50%"
      h="100%"
      mx="auto"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {children}
    </Flex>
  );
});
