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

export const CompanyFormEdit: FC = memo(() => {
  return (
    <FormControl>
      <Flex
        bgColor="white"
        borderRadius="5px"
        w="80%"
        h="550px"
        shadow="md"
        flexWrap="wrap"
        py="50px"
      >
        <FormItemContainer>
          <PrimaryFormItem text="顧客名" placeholder="株式会社A" />
        </FormItemContainer>
        <FormDivider />
        <FormItemContainer>
          <PostNumFormItem placeholder1="611" placeholder2="0000" />
        </FormItemContainer>
        <FormDivider />
        <FormItemContainer>
          <PrimaryFormItem
            text="住所"
            placeholder="東京都葛飾立石町3丁目23-55"
          />
        </FormItemContainer>
        <FormDivider />
        <FormItemContainer>
          <PhoneFormItem
            placeholder1="010"
            placeholder2="2222"
            placeholder3="3333"
          />
        </FormItemContainer>
        <FormDivider />
        <FormButtonContainer>
          <SecondaryButton text="一覧に戻る" size="md" />
          <PrimaryButton text="登録" size="md" />
        </FormButtonContainer>
      </Flex>
    </FormControl>
  );
});
