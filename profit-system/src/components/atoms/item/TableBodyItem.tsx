import { Td } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text: string;
  noBorder?: boolean;
};

export const TableBodyItem: FC<Props> = (props) => {
  const { text, noBorder } = props;
  const borderRightColor = noBorder ? "transparent" : "blackAlpha.200";

  return (
    <Td borderRight="1px solid" borderRightColor={borderRightColor}>
      {text}
    </Td>
  );
};
