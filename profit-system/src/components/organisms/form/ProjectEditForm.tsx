import { FormControl } from "@chakra-ui/react";
import { FC, memo } from "react";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { ProjectCostItem } from "../../atoms/item/ProjectCostItem";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";

export const ProjectEditForm: FC = memo(() => {
  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem text="案件名" />
        <ProjectCostItem text="案件金額" />
        <FormButtonContainer primaryText="更新" secondaryPx="10" ml="50px" />
      </MainContentContainer>
    </FormControl>
  );
});
