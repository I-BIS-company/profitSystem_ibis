import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  name: string;
  inChargeProject: string;
  workHours: number;
};

export const LogTableTemplateList: FC<Props> = memo((props) => {
  const { name, inChargeProject, workHours, id } = props;
  const navigate = useNavigate();

  const onClickEditPage = (
    id: string,
    name: string,
    inChargeProject: string,
    workHours: number
  ) => {
    navigate("/log/workhour_edit", {
      state: {
        id: id,
        name: name,
        inChargeProject: inChargeProject,
        workHours: workHours,
      },
    });
  };

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
            <EditItem
              onClick={() =>
                onClickEditPage(id, name, inChargeProject, workHours)
              }
            />
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});
