import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";
import { useNavigate } from "react-router-dom";
import { CompanyDbType } from "../../../types/company/CompanyDbType";

type Props = {
  filteredCompanyList: CompanyDbType[];
};

export const CompaniesTableTemplateList: FC<Props> = memo((props) => {
  const { filteredCompanyList } = props;
  const navigate = useNavigate();

  const onClickEdit = (
    docId: string,
    name: string,
    postCode: string,
    address: string,
    phone: string
  ) => {
    navigate("/companies_list/company_edit", {
      state: {
        docId: docId,
        name: name,
        postCode: postCode,
        address: address,
        phone: phone,
      },
    });
  };

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
          {filteredCompanyList.map((data) => (
            <Tr fontSize="14" key={data.id}>
              <TableBodyItem text={data.name} />
              <TableBodyItem text={data.postCode} />
              <TableBodyItem text={data.address} />
              <TableBodyItem text={data.phone} />
              <EditItem
                onClick={() =>
                  onClickEdit(
                    data.id,
                    data.name,
                    data.postCode,
                    data.address,
                    data.phone
                  )
                }
              />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
});
