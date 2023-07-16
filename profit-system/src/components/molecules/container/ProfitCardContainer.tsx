import { Box } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ProfitCardContainer: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <Box
      mx="auto"
      h="auto"
      bg="white"
      justifyContent="center"
      boxShadow="base"
      borderRadius="5px"
      p="25px"
      w="450px"
      mb="50px"
    >
      {children}
    </Box>
  );
});
