import { Flex } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const MainScreenTopContainer: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Flex justifyContent="space-between" w="100%" mb="14">
      {children}
    </Flex>
  );
});
