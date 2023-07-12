import { Th } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text: string;
  width?: string;
  noBorder?: boolean;
};

export const TableHeadItem: FC<Props> = (props) => {
  const { text, width, noBorder } = props;
  const borderRightColor = noBorder ? "transparent" : "blackAlpha.200";

  return (
    <Th
      color="blue.500"
      fontSize="16"
      borderRight="1px solid"
      borderRightColor={borderRightColor}
      w={width}
    >
      {text}
    </Th>
  );
};
