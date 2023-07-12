import { Divider, Flex, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";

type Props = {
  value?: string;
};

export const ProjectFormSelect: FC<Props> = memo((props) => {
  const { value } = props;
  const [project, setProject] = useState(value);

  const onChangeProject = (e: ChangeEvent<HTMLSelectElement>) =>
    setProject(e.target.value);

  return (
    <>
      <Flex
        w="80%"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Divider borderColor="blackAlpha.700" w="50%" />
        <FormLabel m="auto" textAlign="center" w="35%">
          案件名
        </FormLabel>
        <Divider borderColor="blackAlpha.700" w="50%" />
      </Flex>
      <Select
        mt="10px"
        mb="50px"
        w="75%"
        borderRadius="20px"
        placeholder="案件名を選択"
        value={project}
        onChange={onChangeProject}
      >
        <option value="A向けシステム開発">A向けシステム開発</option>
        <option value="B向けシステム開発">B向けシステム開発</option>
        <option value="C向けシステム開発">C向けシステム開発</option>
      </Select>
    </>
  );
});
