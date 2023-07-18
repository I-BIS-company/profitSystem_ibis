import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  secondaryPx?: string;
  ml?: string;
  w?: string;
  primaryText?: string;
};

export const FormButtonContainer: FC<Props> = memo((props) => {
  const { secondaryPx, ml, w = "45%", primaryText = "登録" } = props;
  return (
    <Flex w={w} justifyContent="center" alignItems="center" gap="50px" ml={ml}>
      <SecondaryButton text="一覧に戻る" px={secondaryPx} />
      <PrimaryButton text={primaryText} />
    </Flex>
  );
});
