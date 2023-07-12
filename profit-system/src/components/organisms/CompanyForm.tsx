import { Flex, FormControl } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FormItemContainer } from "../molecules/container/FormItemContainer";
import { PrimaryFormItem } from "../atoms/item/PrimaryFormItem";
import { PostNumFormItem } from "../atoms/item/PostNumFormItem";
import { PhoneFormItem } from "../atoms/item/PhoneFormItem";
import { FormButtonContainer } from "../molecules/container/FormButtonContainer";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { FormDivider } from "../atoms/FormDivider";
import { MainContentContainer } from "../molecules/container/MainContentContainer";

export const CompanyForm: FC = memo(() => {
  return (
    <FormControl>
      <MainContentContainer>
        <FormItemContainer>
          <PrimaryFormItem text="顧客名" />
        </FormItemContainer>
        <FormDivider />
        <FormItemContainer>
          <PostNumFormItem />
        </FormItemContainer>
        <FormDivider />
        <FormItemContainer>
          <PrimaryFormItem text="住所" />
        </FormItemContainer>
        <FormDivider />
        <FormItemContainer>
          <PhoneFormItem />
        </FormItemContainer>
        <FormDivider />
        <FormButtonContainer>
          <SecondaryButton text="一覧に戻る" size="md" />
          <PrimaryButton text="登録" size="md" />
        </FormButtonContainer>
      </MainContentContainer>
    </FormControl>
  );
});
