import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";
import { useNavigate } from "react-router-dom";
import { UserDbType } from "../../../types/user/UserDbType";

type Props = {
  userList: UserDbType[];
};

export const UsersTableTemplateList: FC<Props> = memo((props) => {
  const navigate = useNavigate();
  const { userList } = props;

  const onClickEdit = (
    id: string,
    isAdmin: string,
    name: string,
    workHourCost: number
  ) => {
    navigate("/users_list/user_edit", {
      state: {
        id: id,
        isAdmin: isAdmin,
        name: name,
        workHourCost: workHourCost,
      },
    });
  };

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
          {userList.map((data) => (
            <Tr key={data.id} fontSize="14">
              <TableBodyItem text={data.name} />
              <TableBodyItem text={data.isAdmin ? "管理者" : "投稿者"} />
              <TableBodyItem text={`${data.workHourCost.toLocaleString()}円`} />
              <EditItem
                onClick={() => {
                  onClickEdit(
                    data.id,
                    data.isAdmin ? "管理者" : "投稿者",
                    data.name,
                    data.workHourCost
                  );
                }}
              />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
});
