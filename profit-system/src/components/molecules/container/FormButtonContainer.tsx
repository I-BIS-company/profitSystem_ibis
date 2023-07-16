import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  secondaryPx?: string;
  ml?: string;
  gap?: string;
  h?: string;
  w?: string;
  primaryText?: string;
};

export const FormButtonContainer: FC<Props> = memo((props) => {
  const {
    secondaryPx,
    ml,
    gap = "50px",
    h,
    w = "45%",
    primaryText = "登録",
  } = props;
  return (
    <Flex
      w={w}
      h={h}
      justifyContent="center"
      alignItems="center"
      gap={gap}
      ml={ml}
    >
      <SecondaryButton text="一覧に戻る" px={secondaryPx} />
      <PrimaryButton text={primaryText} />
    </Flex>
  );
});
