import { memo, FC, ReactNode } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { Header } from "../organisms/Header";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const MainTemplate: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Flex>
        <Flex flex={1} maxW="256">
          <Sidebar />
        </Flex>
        <Flex flex="auto">{children}</Flex>
      </Flex>
    </>
  );
});
