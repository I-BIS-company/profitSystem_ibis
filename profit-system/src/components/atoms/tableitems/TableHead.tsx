import { Th } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  Text: string;
};

export const TableHead: FC<Props> = (props) => {
  const { Text } = props;

  return (
    <Th
      color="blue.500"
      fontSize="16"
      borderRight="1px solid"
      borderRightColor="blackAlpha.200"
    >
      {Text}
    </Th>
  );
};
