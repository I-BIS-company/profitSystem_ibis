import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  secondaryPx?: string;
};

export const FormButtonContainer: FC<Props> = memo((props) => {
  const { secondaryPx } = props;
  return (
    <Flex
      minW="45%"
      justifyContent="center"
      alignItems="center"
      gap="50px"
      ml="50px"
      px={secondaryPx}
    >
      <SecondaryButton text="一覧に戻る" />
      <PrimaryButton text="登録" />
    </Flex>
  );
});
