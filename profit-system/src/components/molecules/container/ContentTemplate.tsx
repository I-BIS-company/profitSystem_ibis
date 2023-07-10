import { Box } from "@chakra-ui/react";
import { memo, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentTemplate: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Box bg="white" mb="70" borderRadius="5px" boxShadow="base">
        {children}
      </Box>
    </>
  );
});
