import { Box, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  pTitle: string;
  pDescription: string;
  unit?: string;
};

export const ProfitInfoItem: FC<Props> = memo((props) => {
  const { pTitle, pDescription, unit = "円" } = props;
  const unitMargin = unit === "時間" ? "19px" : "0";

  return (
    <Box as="dl" mr={unitMargin}>
      <Box as="dt">
        <Text fontSize="16" color="blue.800" fontWeight="bold" mr="2" pb="8px">
          {pTitle}
        </Text>
      </Box>
      <Box as="dd">
        <Text
          fontSize="18"
          display="inline-block"
          mr="1"
          color="blackAlpha.800"
          marginRight="10px"
        >
          {pDescription}
        </Text>
        <Text fontSize="xs" display="inline-block" color="blackAlpha.800">
          {unit}
        </Text>
      </Box>
    </Box>
  );
});
