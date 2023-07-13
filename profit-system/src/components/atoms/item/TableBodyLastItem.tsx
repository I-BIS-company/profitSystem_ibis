import { Td } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  text: string;
  noBorder?: boolean;
  children?: ReactNode;
};

export const TableBodyLastItem: FC<Props> = (props) => {
  const { text, noBorder, children } = props;
  const borderRightColor = noBorder ? "transparent" : "blackAlpha.200";

  return (
    <Td
      borderRight="1px solid"
      border="none"
      borderRightColor={borderRightColor}
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
