import { FormControl } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { PostNumFormItem } from "../../molecules/item/PostNumFormItem";
import { PhoneFormItem } from "../../molecules/item/PhoneFormItem";

export const CompanyEditForm: FC = memo(() => {
  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem text="顧客名" value="株式会社A" />
        <PostNumFormItem value1="611" value2="0000" />
        <PrimaryFormItem text="住所" value="東京都葛飾区立石町3丁目 23-55" />
        <PhoneFormItem value1="030" value2="0000" value3="3333" />
        <FormButtonContainer primaryText="更新" />
      </MainContentContainer>
    </FormControl>
  );
});
