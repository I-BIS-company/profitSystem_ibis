import { Divider, Flex, FormLabel, Select } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";

type Props = {
  value?: string;
};

export const WorkhourForm: FC<Props> = memo((props) => {
  const { value } = props;
  const [hour, setHour] = useState(value);

  const onChangeHour = (e: ChangeEvent<HTMLSelectElement>) =>
    setHour(e.target.value);

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
          作業時間
        </FormLabel>
        <Divider borderColor="blackAlpha.700" w="50%" />
      </Flex>
      <Select
        mt="10px"
        mb="50px"
        w="75%"
        borderRadius="20px"
        placeholder="作業時間を選択する"
        value={hour}
        onChange={onChangeHour}
      >
        <option value="0.25">0.25</option>
        <option value="0.5">0.5</option>
        <option value="0.75">0.75</option>
        <option value="1">1</option>
        <option value="1.5">1.5</option>
        <option value="2">2</option>
        <option value="2.5">2.5</option>
        <option value="3">3</option>
        <option value="3.5">3.5</option>
        <option value="4">4</option>
        <option value="4.5">4.5</option>
        <option value="5">5</option>
        <option value="5.5">5.5</option>
        <option value="6">6</option>
        <option value="6.5">6.5</option>
        <option value="7">7</option>
        <option value="7.5">7.5</option>
        <option value="8">8</option>
        <option value="8.5">8.5</option>
        <option value="9">9</option>
        <option value="9.5">9.5</option>
        <option value="10">10</option>
        <option value="10.5">10.5</option>
        <option value="11">11</option>
        <option value="11.5">11.5</option>
        <option value="12">12</option>
      </Select>
    </>
  );
});
