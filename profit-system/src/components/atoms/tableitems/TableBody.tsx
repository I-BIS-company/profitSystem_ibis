import { Td } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  Text: string;
};

export const TableBody: FC<Props> = (props) => {
  const { Text } = props;

  return (
    <Td borderRight="1px solid" borderRightColor="blackAlpha.200">
      {Text}
    </Td>
  );
};
