import { Th } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text: string;
  width?: string;
};

export const TableHeadItem: FC<Props> = (props) => {
  const { text, width } = props;

  return (
    <Th color="blue.500" fontSize="16" border="bottom" w={width} py="15px">
      {text}
    </Th>
  );
};
