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
import { Search2Icon } from "@chakra-ui/icons";

export const ProjectsList: FC = memo(() => {
  return (
    <>
      <HeadLine text="案件一覧" />

      <MainScreenTopContainer>
        <Box display="flex" alignItems="center">
          <InputGroup>
            <Input
              type="text"
              placeholder="顧客名で検索"
              borderRadius="5"
              bg="white"
              pr="20"
              pl="3"
            />
            <InputRightElement width="auto" paddingRight="0">
              <Button
                sx={{
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                }}
                colorScheme="blue"
                _hover={{ opacity: 0.8 }}
              >
                検索
                <Search2Icon boxSize="5" bg="blue.500" pl="2" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box>
          <PrimaryButton text="案件を登録する" />
        </Box>
      </MainScreenTopContainer>

      <ContentBgTemplate>
        <p>aaa</p>
      </ContentBgTemplate>
    </>
  );
});
