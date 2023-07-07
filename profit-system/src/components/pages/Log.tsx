import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Flex } from "@chakra-ui/react";
import { MainTemplate } from "../templates/MainTemplate";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Log: FC = memo(() => {

  return (
    <>
      <p>ログページです</p>;
      <PrimaryButton Text="登録" />
    </>
  );
});

