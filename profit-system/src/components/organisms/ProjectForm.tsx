import { FormControl } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FormButtonContainer } from "../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../molecules/container/MainContentContainer";
import { ProjectCostItem } from "../atoms/item/ProjectCostItem";
import { PrimaryFormItem } from "../molecules/item/PrimaryFormItem";

export const ProjectForm: FC = memo(() => {
  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem text="案件名" />
        <ProjectCostItem text="案件金額" />
        <FormButtonContainer ml="50px" />
      </MainContentContainer>
    </FormControl>
  );
});
