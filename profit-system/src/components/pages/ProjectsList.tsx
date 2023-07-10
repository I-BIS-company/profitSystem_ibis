import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplate";

export const ProjectsList: FC = memo(() => {
  return (
    <Box mr="10%" ml="10%" maxW="100%" w="100%" mt="5%">
      <HeadLine Text="案件一覧" />

      <MainScreenTopContainer>
        <Box display="flex" alignItems="center">
          <InputGroup>
            <Input
              type="text"
              placeholder="顧客名で検索"
              paddingRight="0"
              roundedRight="0"
            />
            <InputRightElement width="auto" paddingRight="0">
              <Button
                sx={{
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                }}
                colorScheme="blue"
              >
                検索
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box>
          <PrimaryButton Text="案件を登録する" />
        </Box>
      </MainScreenTopContainer>

      <ContentBgTemplate>
        <p>aaa</p>
      </ContentBgTemplate>
    </Box>
  );
});
