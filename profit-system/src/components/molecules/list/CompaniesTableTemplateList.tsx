import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";

export const CompaniesTableTemplateList: FC = memo(() => {
  return (
    <TableContainer>
      <Table variant="simple" border="none">
        <Thead>
          <Tr>
            <TableHeadItem text="顧客名" />
            <TableHeadItem text="郵便番号" />
            <TableHeadItem text="住所" />
            <TableHeadItem text="電話番号" />
            <TableHeadItem />
          </Tr>
        </Thead>
        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBodyItem text="株式会社A" />
            <TableBodyItem text="611-0000" />
            <TableBodyItem text="東京都葛飾区〇〇町3丁目23-55" />
            <TableBodyItem text="03-0000-0000" />
            <EditItem />
          </Tr>
          <Tr fontSize="14">
            <TableBodyItem text="株式会社B" />
            <TableBodyItem text="611-0000" />
            <TableBodyItem text="東京都品川区〇〇町5丁目23-69" />
            <TableBodyItem text="03-0000-0000" />
            <EditItem />
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});