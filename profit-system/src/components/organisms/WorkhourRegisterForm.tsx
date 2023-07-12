import { Flex, FormControl } from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { MainContentContainer } from "../molecules/container/MainContentContainer";
import { WorkhourFormContainer } from "../molecules/container/WorkhourContainer";
import { ProjectFormSelect } from "../molecules/select/ProjectFormSelect";
import { WorkhourFormSelect } from "../molecules/select/WorkhourFormSelect";

export const WorkhourRegisterForm: FC = memo(() => {
  return (
    <MainContentContainer>
      <FormControl>
        <WorkhourFormContainer>
          <ProjectFormSelect />
          <WorkhourFormSelect />
          <Flex w="45%" justifyContent="center" alignItems="center" gap="50px">
            <SecondaryButton text="一覧に戻る" size="md" px="16" />
            <PrimaryButton text="登録" size="md" />
          </Flex>
        </WorkhourFormContainer>
      </FormControl>
    </MainContentContainer>
  );
});
