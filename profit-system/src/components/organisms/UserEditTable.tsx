import {
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { TableHeadItem } from "../atoms/item/TableHeadItem";
import { UserEditTableItem } from "../atoms/item/UserEditTableItem";
import { FormButtonContainer } from "../molecules/container/FormButtonContainer";

export const UserEditTable: FC = memo(() => {
  return (
    <TableContainer h="300px" p="50px">
      <Table variant="simple" border="1px" borderColor="blackAlpha.200">
        <Thead>
          <Tr>
            <TableHeadItem text="ユーザ名" sideBorder={true} />
            <TableHeadItem text="権限" sideBorder={true} />
            <TableHeadItem text="作業コスト" sideBorder={true} />
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <UserEditTableItem value="ユーザ五郎" />
            <Td w="33%" border="1px" borderColor="blackAlpha.200">
              <Select>
                <option value="投稿者">投稿者</option>
                <option value="管理者">管理者</option>
              </Select>
            </Td>
            <UserEditTableItem value={1500} />
          </Tr>
        </Tbody>
      </Table>
      <FormButtonContainer gap="80px" h="130px" w="100%" secondaryPx="10" />
    </TableContainer>
  );
});
