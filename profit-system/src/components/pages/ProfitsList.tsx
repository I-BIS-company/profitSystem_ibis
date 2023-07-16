import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { InfoIcon } from "@chakra-ui/icons";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";

export const ProfitsList: FC = memo(() => {
  return (
    <>
      <HeadLine text="利益一覧" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box
          mx="auto"
          h="auto"
          bg="white"
          justifyContent="center"
          boxShadow="base"
          borderRadius="5px"
          p="25px"
          w="450px"
          mb="50px"
        >
          <Flex alignItems="center" justifyContent="center" mb="16px">
            <InfoIcon color="gray.400" pr="8px" boxSize="6" />
            <Text fontSize="16" fontWeight="semibold">
              利益情報
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            textAlign="center"
            justifyContent="center"
            mb="75px"
          >
            <Text position="relative" fontSize="18px">
              <Text
                _before={{
                  content: '""',
                  position: "absolute",
                  width: "50px",
                  top: "50%",
                  left: "-75px",
                  transform: "translateY(-50%)",
                  height: "1px",
                  backgroundColor: "blackAlpha.700",
                }}
              />
              案件：
            </Text>
            <Text position="relative" fontSize="18px">
              A
              <Text
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "50px",
                  top: "50%",
                  right: "-75px",
                  transform: "translateY(-50%)",
                  height: "1px",
                  backgroundColor: "blackAlpha.700",
                }}
              />
            </Text>
          </Flex>

          <Box textAlign="left" mx="auto">
            <Flex justifyContent="space-between">
              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    売上
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    1,000,000
                  </Text>
                  <Text
                    fontSize="xs"
                    display="inline-block"
                    color="blackAlpha.800"
                  >
                    円
                  </Text>
                </dd>
              </Box>

              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    粗利益
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    500,000
                  </Text>
                  <Text fontSize="xs" display="inline-block">
                    円
                  </Text>
                </dd>
              </Box>
            </Flex>
            <Divider my="4" />

            <Flex justifyContent="space-between">
              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    コスト合計
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    500,000
                  </Text>
                  <Text fontSize="xs" display="inline-block">
                    円
                  </Text>
                </dd>
              </Box>

              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    稼働時間
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    200
                  </Text>
                  <Text fontSize="xs" display="inline-block">
                    時間
                  </Text>
                </dd>
              </Box>
            </Flex>
          </Box>
        </Box>

        {/* 2個目 */}
        <Box
          mx="auto"
          h="auto"
          bg="white"
          justifyContent="center"
          boxShadow="base"
          borderRadius="5px"
          p="25px"
          w="450px"
          mb="50px"
        >
          <Flex alignItems="center" justifyContent="center" mb="16px">
            <InfoIcon color="gray.400" pr="8px" boxSize="6" />
            <Text fontSize="16" fontWeight="semibold">
              利益情報
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            textAlign="center"
            justifyContent="center"
            mb="75px"
          >
            <Text position="relative" fontSize="18px">
              <Text
                _before={{
                  content: '""',
                  position: "absolute",
                  width: "50px",
                  top: "50%",
                  left: "-75px",
                  transform: "translateY(-50%)",
                  height: "1px",
                  backgroundColor: "blackAlpha.700",
                }}
              />
              案件：
            </Text>
            <Text position="relative" fontSize="18px">
              A
              <Text
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "50px",
                  top: "50%",
                  right: "-75px",
                  transform: "translateY(-50%)",
                  height: "1px",
                  backgroundColor: "blackAlpha.700",
                }}
              />
            </Text>
          </Flex>

          <Box textAlign="left" mx="auto">
            <Flex justifyContent="space-between">
              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    売上
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    1,000,000
                  </Text>
                  <Text
                    fontSize="xs"
                    display="inline-block"
                    color="blackAlpha.800"
                  >
                    円
                  </Text>
                </dd>
              </Box>

              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    粗利益
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    500,000
                  </Text>
                  <Text fontSize="xs" display="inline-block">
                    円
                  </Text>
                </dd>
              </Box>
            </Flex>
            <Divider my="4" />

            <Flex justifyContent="space-between">
              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    コスト合計
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    500,000
                  </Text>
                  <Text fontSize="xs" display="inline-block">
                    円
                  </Text>
                </dd>
              </Box>

              <Box>
                <dt>
                  <Text
                    fontSize="16"
                    color="blue.800"
                    fontWeight="bold"
                    mr="2"
                    pb="8px"
                  >
                    稼働時間
                  </Text>
                </dt>
                <dd>
                  <Text
                    fontSize="18"
                    display="inline-block"
                    mr="1"
                    color="blackAlpha.800"
                    marginRight="10px"
                  >
                    200
                  </Text>
                  <Text fontSize="xs" display="inline-block">
                    時間
                  </Text>
                </dd>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
});
