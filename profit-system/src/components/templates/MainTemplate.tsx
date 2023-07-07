import { memo, FC, ReactNode } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const MainTemplate: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Flex>
        {/* <Header /> */}
        <Sidebar />
        {children}
      </Flex>
    </>
  );
});
