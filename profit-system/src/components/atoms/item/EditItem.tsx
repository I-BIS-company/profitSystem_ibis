import { Td } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const EditItem: FC<Props> = (props) => {
  const { children } = props;

  return (
    <Td
      border="none"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
    </Td>
  );
};
