import { Flex } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FormButtonContainer: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Flex w="45%" justifyContent="center" alignItems="center" gap="50px">
      {children}
    </Flex>
  );
});
