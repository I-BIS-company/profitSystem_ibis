import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { InfoIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";

export const ProfitsList: FC = memo(() => {
  return (
    <>
      <HeadLine text="利益一覧" />

      <ContentBgTemplate>
        <Flex alignItems="center" p="16px">
          <InfoIcon color="gray.400" pr="8px" boxSize="6" />
          <Text fontSize="16" fontWeight="semibold">
            利益情報
          </Text>
        </Flex>
        <Flex alignItems="center" textAlign="center">
          <Text position="relative">
            <Text
              _before={{
                content: '""',
                position: "absolute",
                width: "15px",
                top: "50%",
                left: "-25px",
                transform: "translateY(-50%)",
                height: "2px",
                backgroundColor: "gray",
              }}
            />
            案件：
          </Text>
          <Text position="relative">
            A
            <Text
              _after={{
                content: '""',
                position: "absolute",
                width: "15px",
                top: "50%",
                right: "-25px",
                transform: "translateY(-50%)",
                height: "2px",
                backgroundColor: "gray",
              }}
            />
          </Text>
        </Flex>
      </ContentBgTemplate>
    </>
  );
});
