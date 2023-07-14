import { FormControl } from "@chakra-ui/react";
import { memo, FC } from "react";
import { MainContentContainer } from "../molecules/container/MainContentContainer";
import { WorkhourFormContainer } from "../molecules/container/WorkhourFormContainer";
import { ProjectFormSelect } from "../molecules/select/ProjectFormSelect";
import { WorkhourFormSelect } from "../molecules/select/WorkhourFormSelect";
import { FormButtonContainer } from "../molecules/container/FormButtonContainer";

export const WorkhourEditForm: FC = memo(() => {
  return (
    <MainContentContainer>
      <FormControl>
        <WorkhourFormContainer>
          <ProjectFormSelect value="A向けシステム開発" />
          <WorkhourFormSelect value="5" />
          <FormButtonContainer secondaryPx="16" />
        </WorkhourFormContainer>
      </FormControl>
    </MainContentContainer>
  );
});
