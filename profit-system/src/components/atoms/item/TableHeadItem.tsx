import { Th } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text?: string;
  width?: string;
  allBorder?: boolean;
};

export const TableHeadItem: FC<Props> = (props) => {
  const { text, width, allBorder } = props;

  return (
    <Th
      color="blue.500"
      fontSize="16"
      border={allBorder ? "1px" : "none"}
      borderColor="blackAlpha.200"
      w={width}
      py="15px"
    >
      {text}
    </Th>
  );
};
