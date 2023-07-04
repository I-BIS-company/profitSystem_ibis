import { Flex, Link, Divider } from "@chakra-ui/react";

function App() {
  return (
    <Flex direction="column" width="256px" backgroundColor="orange.50" flex="1">
      <Link>ログ一覧</Link>
      <Divider />
      <Link>工数登録</Link>
      <Link>ユーザ一覧</Link>
      <Divider />
      <Link>顧客一覧</Link>
      <Divider />
      <Link>顧客登録</Link>
      <Link>案件一覧</Link>
      <Divider />
      <Link>案件登録</Link>
      <Link>利益一覧</Link>
    </Flex>
  );
}

export default App;
