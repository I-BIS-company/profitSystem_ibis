import { Divider, Flex, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, FC, memo } from "react";
import { ProjectNameListType } from "../../../types/project/ProjectNameListType";

type Props = {
  value?: string;
  projectNameList?: ProjectNameListType[];
  onChangeProject?: (value: string) => void;
};

export const ProjectSelectForm: FC<Props> = memo((props) => {
  const { value, projectNameList, onChangeProject } = props;

  const handleOnChangeProject = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onChangeProject?.(value);
  };

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
        value={value}
        onChange={handleOnChangeProject}
      >
        {projectNameList?.map((data) => (
          <option key={data.id} value={data.name}>
            {data.name}
          </option>
        ))}
      </Select>
    </>
  );
});
