import { Flex } from "@chakra-ui/react";
import { FC, ReactNode, memo } from "react";

type Props = {
  children: ReactNode;
};

export const FormItemContainer: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Flex w="70%" justifyContent="space-around" alignItems="center">
      {children}
    </Flex>
  );
});
