import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  secondaryPx?: string;
  ml?: string;
};

export const FormButtonEditContainer: FC<Props> = memo((props) => {
  const { secondaryPx, ml } = props;
  return (
    <Flex
      w="45%"
      justifyContent="center"
      alignItems="center"
      gap="50px"
      ml={ml}
    >
      <SecondaryButton text="一覧に戻る" px={secondaryPx} />
      <PrimaryButton text="更新" />
    </Flex>
  );
});
