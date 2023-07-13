import { Td } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text: string;
};

export const TableBodyItem: FC<Props> = (props) => {
  const { text } = props;

  return (
    <Td borderRight="1px solid" borderRightColor="blackAlpha.200">
      {text}
    </Td>
  );
};
