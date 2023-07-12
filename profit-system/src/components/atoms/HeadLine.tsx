import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text: string;
};

export const HeadLine: FC<Props> = (props) => {
  const { text } = props;
  return (
    <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
      <Heading mb="50">{text}</Heading>
    </Box>
  );
};
