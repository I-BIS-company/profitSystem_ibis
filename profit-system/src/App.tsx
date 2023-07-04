import { EditIcon } from "@chakra-ui/icons";
import { Flex, Link, Divider } from "@chakra-ui/react";

function App() {
  return (
    <Flex
      direction="column"
      width="256px"
      backgroundColor="orange.50"
      height="100vh"
      fontWeight="600"
    >
      <Flex direction="column" alignItems="center" mt="10px" mb="50px">
        <Link fontSize="20px">ログ一覧</Link>
        <Divider width="200px" borderColor="BlackAlpha 800" />
        <Link mt="10px">
          <EditIcon mr="8px" />
          工数登録
        </Link>
      </Flex>
      <Flex direction="column" alignItems="center" my="10px" mb="50px">
        <Link fontSize="20px">ユーザ一覧</Link>
        <Divider width="200px" borderColor="BlackAlpha 800" />
      </Flex>
      <Flex direction="column" alignItems="center" my="10px" mb="50px">
        <Link fontSize="20px">顧客一覧</Link>
        <Divider width="200px" borderColor="BlackAlpha 800" />
        <Link mt="10px">
          <EditIcon mr="8px" />
          顧客登録
        </Link>
      </Flex>
      <Flex direction="column" alignItems="center" my="10px" mb="50px">
        <Link fontSize="20px">案件一覧</Link>
        <Divider width="200px" borderColor="BlackAlpha 800" />
        <Link mt="10px">
          <EditIcon mr="8px" />
          案件登録
        </Link>
        <Link mt="10px">
          <EditIcon mr="8px" />
          利益一覧
        </Link>
      </Flex>
    </Flex>
  );
}

export default App;
