import { Box, Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { TableBodyLastItem } from "../../atoms/item/TableBodyLastItem";

export const LogTableTemplateList: FC = memo(() => {
  return (
    <TableContainer>
      <Table variant="simple" border="none">
        <Thead>
          <Tr>
            <TableHeadItem text="担当者名" />
            <TableHeadItem text="担当案件" />
            <TableHeadItem text="時間(工数)" noBorder={true} />
          </Tr>
        </Thead>

        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBodyItem text="ユーザ 太郎" />
            <TableBodyItem text="xxxxシステム開発" />
            <TableBodyLastItem text="10時間">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="2.5"
              >
                <SecondaryButton text="編集" size="sm" />
              </Box>
            </TableBodyLastItem>
          </Tr>
          <Tr fontSize="14">
            <TableBodyItem text="ユーザ 太郎" />
            <TableBodyItem text="xxxxシステム開発" />
            <TableBodyLastItem text="10時間">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="2.5"
              >
                <SecondaryButton text="編集" size="sm" />
              </Box>
            </TableBodyLastItem>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});
