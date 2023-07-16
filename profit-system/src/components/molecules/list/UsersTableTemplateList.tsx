import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";

export const UsersTableTemplateList: FC = memo(() => {
  const userData = [
    { userName: "ユーザ 太郎", isAdmin: "投稿者", cost: "1,000円" },
    { userName: "ユーザ 二郎", isAdmin: "投稿者", cost: "1,200円" },
    { userName: "ユーザ 花子", isAdmin: "管理者", cost: "1,000円" },
    { userName: "ユーザ 二郎", isAdmin: "投稿者", cost: "1,500円" },
    { userName: "ユーザ 太郎", isAdmin: "投稿者", cost: "2,000円" },
  ];

  return (
    <TableContainer>
      <Table variant="simple" border="none">
        <Thead>
          <Tr>
            <TableHeadItem text="ユーザ名" />
            <TableHeadItem text="権限" />
            <TableHeadItem text="作業コスト" />
            <TableHeadItem />
          </Tr>
        </Thead>
        <Tbody alignItems="center">
          {userData.map((user) => (
            <Tr key={user.userName} fontSize="14">
              <TableBodyItem text={user.userName} />
              <TableBodyItem text={user.isAdmin} />
              <TableBodyItem text={user.cost} />
              <EditItem />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
});
