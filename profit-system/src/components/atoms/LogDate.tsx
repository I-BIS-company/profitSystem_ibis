import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  date: string;
};

export const LogDate: FC<Props> = (props) => {
  const { date } = props;
  return (
    <Box mb="25">
      <Flex alignItems="center">
        <CalendarIcon mr="15" />
        <Text>{date}</Text>
      </Flex>
    </Box>
  );
};
