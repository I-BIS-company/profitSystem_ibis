import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  Date: string;
};

export const LogDate: FC<Props> = (props) => {
  const { Date } = props;
  return (
    <Box mb="25">
      <Flex alignItems="center">
        <CalendarIcon mr="15" />
        <Text>{Date}</Text>
      </Flex>
    </Box>
  );
};
