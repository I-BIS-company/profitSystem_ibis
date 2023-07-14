import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";

export const ProjectTableTemplateList: FC = memo(() => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TableHeadItem width="30%" text="案件名" />
            <TableHeadItem text="案件金額" />
            <TableHeadItem />
          </Tr>
        </Thead>

        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBodyItem text="xxxx向けシステム開発" />
            <TableBodyItem text="1,000,000円" />
            <EditItem />
          </Tr>
          <Tr fontSize="14">
            <TableBodyItem text="xxxx向けシステム開発" />
            <TableBodyItem text="2,000,000円" />
            <EditItem />
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});
