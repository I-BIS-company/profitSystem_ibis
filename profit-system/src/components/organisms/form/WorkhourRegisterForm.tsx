import { FormControl } from "@chakra-ui/react";
import { memo, FC, useState } from "react";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { ProjectSelectForm } from "../../molecules/form/ProjectSelectForm";
import { WorkhourSelectForm } from "../../molecules/form/WorkhourSelectForm";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";

export const WorkhourRegisterForm: FC = memo(() => {
  // cosnt[(projectName, setProjectName)] = useState("");

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
        <ProjectSelectForm />
        <WorkhourSelectForm />
        <FormButtonContainer secondaryPx="10" />
      </FormControl>
    </MainContentContainer>
  );
});
