import { FormControl } from "@chakra-ui/react";
import { FC, memo } from "react";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { PostNumFormItem } from "../../molecules/item/PostNumFormItem";
import { PhoneFormItem } from "../../molecules/item/PhoneFormItem";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";

export const CompanyRegisterForm: FC = memo(() => {
  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem text="顧客名" />
        <PostNumFormItem />
        <PrimaryFormItem text="住所" />
        <PhoneFormItem />
        <FormButtonContainer />
      </MainContentContainer>
    </FormControl>
  );
});
