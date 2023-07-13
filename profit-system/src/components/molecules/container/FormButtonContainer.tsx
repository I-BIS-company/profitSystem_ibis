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
    <Flex w="45%" justifyContent="center" alignItems="center" gap="50px">
      <SecondaryButton text="一覧に戻る" px={secondaryPx} />
      <PrimaryButton text="登録" />
    </Flex>
  );
});
