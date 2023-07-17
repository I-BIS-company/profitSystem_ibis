import { Box, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  value: number;
};

export const WorkingHoursItem: FC<Props> = memo((props) => {
  const { value } = props;

  return (
    <Box mr="19px">
      <dt>
        <Text fontSize="16" color="blue.800" fontWeight="bold" mr="2" pb="8px">
          稼働時間
        </Text>
      </dt>
      <dd>
        <Text
          fontSize="18"
          display="inline-block"
          mr="1"
          color="blackAlpha.800"
          marginRight="10px"
        >
          {value}
        </Text>
        <Text fontSize="xs" display="inline-block" color="blackAlpha.800">
          時間
        </Text>
      </dd>
    </Box>
  );
});
