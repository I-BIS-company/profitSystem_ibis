import { Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC, useState, useEffect } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { EditItem } from "../EditItem";
import { DocumentData, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export const CompaniesTableTemplateList: FC = memo(() => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState<DocumentData>([]);

  useEffect(() => {
    const getCompanyData = async () => {
      const companyList: DocumentData[] = [];
      const querySnapshot = await getDocs(collection(db, "company"));
      querySnapshot.forEach((doc) => {
        const dataId = {
          id: doc.id,
        };
        companyList.push({ ...dataId, ...doc.data() });
      });
      setCompanyData(companyList);
    };
    getCompanyData();
  }, []);
  console.log(companyData);

  const onClickEdit = (docId: string) => {
    navigate("/companies_list/company_edit", {
      state: {
        docId: docId,
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
          {companyData.map((data: DocumentData) => (
            <Tr fontSize="14" key={data.id}>
              <TableBodyItem text={data.name} />
              <TableBodyItem text={data.postCode} />
              <TableBodyItem text={data.address} />
              <TableBodyItem text={data.phone} />
              <EditItem onClick={() => onClickEdit(data.id)} />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
});
