import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
} from "@chakra-ui/react";
import { memo, FC } from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const WorkhourRegister: FC = memo(() => {
  return (
    <>
      <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
        <Heading mb="50">工数登録</Heading>
      </Box>
      <Flex
        bgColor="white"
        borderRadius="5px"
        w="80%"
        h="550px"
        shadow="md"
        flexWrap="wrap"
        py="50px"
      >
        <FormControl>
          <Flex
            w="50%"
            h="100%"
            mx="auto"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
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
            >
              <option value="A向けシステム開発">A向けシステム開発</option>
              <option value="B向けシステム開発">B向けシステム開発</option>
              <option value="C向けシステム開発">C向けシステム開発</option>
            </Select>
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
            <Flex
              w="45%"
              justifyContent="center"
              alignItems="center"
              gap="50px"
            >
              <SecondaryButton text="一覧に戻る" size="md" px="16" />
              <PrimaryButton text="登録" size="md" />
            </Flex>
          </Flex>
        </FormControl>
      </Flex>
    </>
  );
});
