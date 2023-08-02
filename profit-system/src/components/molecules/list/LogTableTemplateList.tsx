import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";

type Props = {
  name: string;
  inChargeProject: string;
  workHours: number;
};

export const LogTableTemplateList: FC<Props> = memo((props) => {
  const { name, inChargeProject, workHours } = props;
  return (
    <TableContainer>
      <Table variant="simple" border="none">
        <Thead>
          <Tr>
            <TableHeadItem text="担当者名" />
            <TableHeadItem text="担当案件" />
            <TableHeadItem text="時間(工数)" />
            <TableHeadItem />
          </Tr>
        </Thead>

        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBodyItem text={name} />
            <TableBodyItem text={inChargeProject} />
            <TableBodyItem text={`${workHours}時間`} />
            <EditItem />
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});
