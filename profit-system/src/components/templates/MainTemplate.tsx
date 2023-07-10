import { memo, FC, ReactNode } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { Header } from "../organisms/Header";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const MainTemplate: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <Box w="100%">
          <Box mr="10%" ml="10%" mt="5%">
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
});
