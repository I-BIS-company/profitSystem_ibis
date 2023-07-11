import { Input } from "@chakra-ui/input";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import { memo, FC } from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@chakra-ui/react";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export const CompanyRegister: FC = memo(() => {
  return (
    <>
      <Box borderLeft="6px solid blue" borderColor="blue.500" pl="4">
        <Heading mb="50">顧客登録</Heading>
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
        <Flex w="70%" justifyContent="space-around" alignItems="center">
          <Text fontSize="lg" w="15%">
            顧客名
          </Text>
          <Flex>
            <Input w="400px" />
          </Flex>
        </Flex>
        <Divider m="auto" borderColor="blackAlpha.400" w="92%" />
        <Flex w="70%" justifyContent="space-around" alignItems="center">
          <Text fontSize="lg" w="15%">
            郵便番号
          </Text>
          <Flex alignItems="center">
            {/* Standard Input */}
            {/* <Input w="400px" /> */}
            {/* Icon and 2 small inputs */}
            <Icon as={FontAwesomeIcon} icon={faSquareEnvelope} boxSize={6} />
            <Input mx="18px" w="150px" />
            <Text fontSize="2xl">-</Text>
            <Input mx="18px" w="150px" />
          </Flex>
        </Flex>
        <Divider m="auto" borderColor="blackAlpha.400" w="92%" />
        <Flex w="70%" justifyContent="space-around" alignItems="center">
          <Text fontSize="lg" w="15%">
            住所
          </Text>
          <Flex>
            <Input w="400px" />
          </Flex>
        </Flex>
        <Divider m="auto" borderColor="blackAlpha.400" w="92%" />
        <Flex w="70%" justifyContent="space-around" alignItems="center">
          <Text fontSize="lg" w="15%">
            電話番号
          </Text>
          <Flex>
            {/* Standard Input */}
            {/* <Input w="400px" /> */}
            {/* 3 Small Inputs */}
            <Input mx="18px" w="70px" />
            <Text fontSize="2xl">-</Text>
            <Input mx="18px" w="100px" />
            <Text fontSize="2xl">-</Text>
            <Input mx="18px" w="100px" />
          </Flex>
        </Flex>
        <Flex w="45%" justifyContent="center" alignItems="center" gap="50px">
          <SecondaryButton text="一覧に戻る" size="md" />
          <PrimaryButton text="登録" size="md" />
        </Flex>
      </Flex>
    </>
  );
});
