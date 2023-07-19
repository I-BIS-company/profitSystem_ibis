import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  secondaryPx?: string;
  ml?: string;
  primaryText?: string;
  onClick?: () => void;
};

export const FormButtonContainer: FC<Props> = memo((props) => {
  const { secondaryPx, ml, primaryText = "登録", onClick } = props;
  return (
    <Flex justifyContent="center" alignItems="center" gap="50px" ml={ml}>
      <SecondaryButton text="一覧に戻る" px={secondaryPx} />
      <PrimaryButton text={primaryText} onClick={onClick} />
    </Flex>
  );
});
