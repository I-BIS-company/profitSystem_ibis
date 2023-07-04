import { Flex } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SBItemsContainer: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Flex direction="column" alignItems="center" mt="10px" mb="50px">
        {children}
      </Flex>
    </>
  );
});
