import { FormControl } from "@chakra-ui/react";
import { memo, FC } from "react";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { ProjectSelectForm } from "../../molecules/form/ProjectSelectForm";
import { WorkhourSelectForm } from "../../molecules/form/WorkhourSelectForm";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";

export const WorkhourEditForm: FC = memo(() => {
  return (
    <MainContentContainer>
      <FormControl
        w="50%"
        h="100%"
        mx="auto"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display="flex"
      >
        <ProjectSelectForm value="A向けシステム開発" />
        <WorkhourSelectForm value="5" />
        <FormButtonContainer secondaryPx="10" />
      </FormControl>
    </MainContentContainer>
  );
});
