import { Box, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  value: string;
};

export const GrossProfitItem: FC<Props> = memo((props) => {
  const { value } = props;

  return (
    <Box>
      <dt>
        <Text fontSize="16" color="blue.800" fontWeight="bold" mr="2" pb="8px">
          粗利益
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
          円
        </Text>
      </dd>
    </Box>
  );
});
