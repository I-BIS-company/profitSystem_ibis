import {
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";
import { TableHeadItem } from "../atoms/item/TableHeadItem";
import { UserEditTableItem } from "../atoms/item/UserEditTableItem";
import { FormButtonContainer } from "../molecules/container/FormButtonContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const UserEditTable: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const userDocRef = doc(db, "users", id);

  const [userName, setUserName] = useState(location.state.name);
  const [userIsAdmin, setUserIsAdmin] = useState(location.state.isAdmin);
  const [userWorkHourCost, setUserWorkHourCost] = useState(
    location.state.workHourCost
  );

  const handleUserName = (newValue: string) => {
    setUserName(newValue);
  };
  const handleIsAdmin = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setUserIsAdmin(newValue);
  };
  const handleWorkHourCost = (newValue: string) => {
    setUserWorkHourCost(Number(newValue));
  };

  const onClickEdit = async () => {
    await updateDoc(userDocRef, {
      name: userName,
      isAdmin: userIsAdmin == "管理者" ? true : false,
      workHourCost: userWorkHourCost,
    });
    onClickBack();
  };

  const onClickBack = () => {
    navigate("/users_list");
  };

  return (
    <TableContainer h="300px" p="50px">
      <Table
        variant="simple"
        border="1px"
        borderColor="blackAlpha.200"
        mb="40px"
      >
        <Thead>
          <Tr>
            <TableHeadItem text="ユーザ名" allBorder={true} />
            <TableHeadItem text="権限" allBorder={true} />
            <TableHeadItem text="作業コスト" allBorder={true} />
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <UserEditTableItem
              value={userName}
              handleValueChange={handleUserName}
            />
            <Td w="33%" border="1px" borderColor="blackAlpha.200">
              <Select value={userIsAdmin} onChange={handleIsAdmin}>
                <option value="投稿者">投稿者</option>
                <option value="管理者">管理者</option>
              </Select>
            </Td>
            <UserEditTableItem
              value={userWorkHourCost}
              onlyNumber={true}
              handleValueChange={handleWorkHourCost}
            />
          </Tr>
        </Tbody>
      </Table>
      <FormButtonContainer
        secondaryPx="10"
        primaryText="更新"
        primaryOnClick={onClickEdit}
        secondaryOnClick={onClickBack}
      />
    </TableContainer>
  );
});
