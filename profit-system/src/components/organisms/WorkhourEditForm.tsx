import { FormControl } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { MainContentContainer } from "../molecules/container/MainContentContainer";
import { WorkhourFormContainer } from "../molecules/container/WorkhourContainer";
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
          <FormButtonContainer>
            <SecondaryButton text="一覧に戻る" size="md" px="16" />
            <PrimaryButton text="登録" size="md" />
          </FormButtonContainer>
        </WorkhourFormContainer>
      </FormControl>
    </MainContentContainer>
  );
});
