import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  Text: string;
};

export const HeadLine: FC<Props> = (props) => {
  const { Text } = props;
  return (
    <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
      <Heading mb="50">{Text}</Heading>
    </Box>
  );
};
