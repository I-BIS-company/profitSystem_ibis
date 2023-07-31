import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";
import { ProjectDbType } from "../../../types/project/ProjectDbType";
import { useNavigate } from "react-router-dom";

type Props = {
  projectList: ProjectDbType[];
};

export const ProjectTableTemplateList: FC<Props> = memo((props) => {
  const navigate = useNavigate();
  const { projectList } = props;

  const onClickEdit = (docId: string, name: string, price: number) => {
    navigate("/projects_list/project_edit", {
      state: {
        docId: docId,
        name: name,
        price: price,
      },
    });
  };

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
          {projectList.map((data) => (
            <Tr fontSize="14" key={data.id}>
              <TableBodyItem text={data.name} />
              <TableBodyItem text={`${data.price.toLocaleString()}円`} />
              <EditItem
                onClick={() => onClickEdit(data.id, data.name, data.price)}
              />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
});
