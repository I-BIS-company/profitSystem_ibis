import { InfoIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  text: string;
};

export const ProfitHeadlineItem: FC<Props> = memo((props) => {
  const { text } = props;

  return (
    <>
      <Flex alignItems="center" justifyContent="center" mb="16px">
        <InfoIcon color="gray.400" pr="8px" boxSize="6" />
        <Text fontSize="16" fontWeight="semibold">
          利益情報
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        mb="75px"
      >
        <Text position="relative" fontSize="18px">
          <Text
            _before={{
              content: '""',
              position: "absolute",
              width: "50px",
              top: "50%",
              left: "-75px",
              transform: "translateY(-50%)",
              height: "1px",
              backgroundColor: "blackAlpha.700",
            }}
          />
          案件：
        </Text>
        <Text position="relative" fontSize="18px" w="180px" textAlign="left">
          {text}
          <Text
            _after={{
              content: '""',
              position: "absolute",
              width: "50px",
              top: "50%",
              right: "-75px",
              transform: "translateY(-50%)",
              height: "1px",
              backgroundColor: "blackAlpha.700",
            }}
          />
        </Text>
      </Flex>
    </>
  );
});
