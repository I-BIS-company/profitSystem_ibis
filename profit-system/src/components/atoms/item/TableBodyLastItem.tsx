import { Td } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  text: string;
  children?: ReactNode;
};

export const TableBodyLastItem: FC<Props> = (props) => {
  const { text, children } = props;

  return (
    <Td
      borderRight="1px solid"
      border="none"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      pr="100px"
    >
      {text}
      {children}
    </Td>
  );
};
