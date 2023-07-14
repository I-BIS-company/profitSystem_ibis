import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

export const FormButtonContainer: FC = memo(() => {
  return (
    <Flex
      minW="45%"
      justifyContent="center"
      alignItems="center"
      gap="50px"
      ml="50px"
    >
      <SecondaryButton text="一覧に戻る" />
      <PrimaryButton text="登録" />
    </Flex>
  );
});
