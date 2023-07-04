import { EditIcon } from "@chakra-ui/icons";
import { Flex, Link } from "@chakra-ui/react";
import { SBMainItem } from "./components/molecules/link/SBMainItem";
import { SBSubItem } from "./components/molecules/link/SBSubItem";

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
        <SBMainItem text="ログ一覧" />
        <SBSubItem text="工数登録" />
      </Flex>
      <Flex direction="column" alignItems="center" my="10px" mb="50px">
        <SBMainItem text="ユーザ一覧" />
      </Flex>
      <Flex direction="column" alignItems="center" my="10px" mb="50px">
        <SBMainItem text="顧客一覧" />
        <SBSubItem text="顧客登録" />
      </Flex>
      <Flex direction="column" alignItems="center" my="10px" mb="50px">
        <SBMainItem text="案件一覧" />
        <SBSubItem text="案件登録" />
        <SBSubItem text="利益一覧" />
      </Flex>
    </Flex>
  );
}

export default App;
