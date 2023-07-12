import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  text: string;
};

export const PrimarySearchButton: FC<Props> = memo((props) => {
  const { text } = props;
  return (
    <Box display="flex" alignItems="center">
      <InputGroup>
        <Input
          type="text"
          placeholder={`${text}で検索`}
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
  );
});
