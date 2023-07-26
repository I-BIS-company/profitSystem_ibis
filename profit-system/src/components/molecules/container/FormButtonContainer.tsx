import { Flex } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  secondaryPx?: string;
  ml?: string;
  primaryText?: string;
  primaryOnClick?: () => void;
  secondaryOnClick?: () => void;
};

export const FormButtonContainer: FC<Props> = memo((props) => {
  const {
    secondaryPx,
    ml,
    primaryText = "登録",
    primaryOnClick,
    secondaryOnClick,
  } = props;
  return (
    <Flex justifyContent="center" alignItems="center" gap="50px" ml={ml}>
      <SecondaryButton
        text="一覧に戻る"
        px={secondaryPx}
        onClick={secondaryOnClick}
      />
      <PrimaryButton text={primaryText} onClick={primaryOnClick} />
    </Flex>
  );
});
