import { FormControl } from "@chakra-ui/react";
import { memo, FC } from "react";
import { MainContentContainer } from "../molecules/container/MainContentContainer";
import { ProjectForm } from "../molecules/form/ProjectForm";
import { WorkhourForm } from "../molecules/form/WorkhourForm";
import { FormButtonContainer } from "../molecules/container/FormButtonContainer";

export const WorkhourRegisterForm: FC = memo(() => {
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
        <ProjectForm />
        <WorkhourForm />
        <FormButtonContainer secondaryPx="16" />
      </FormControl>
    </MainContentContainer>
  );
});
