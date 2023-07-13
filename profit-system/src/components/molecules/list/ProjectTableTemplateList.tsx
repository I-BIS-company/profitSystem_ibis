import { Box, Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { TableBodyLastItem } from "../../atoms/item/TableBodyLastItem";

export const ProjectTableTemplateList: FC = memo(() => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TableHeadItem width="30%" text="案件名" />
            <TableHeadItem text="案件金額" noBorder={true} />
          </Tr>
        </Thead>

        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBodyItem text="xxxx向けシステム開発" />
            <TableBodyLastItem text="1,000,000円">
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
            <TableBodyItem text="xxxx向けシステム開発" />
            <TableBodyLastItem text="2,000,000円">
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
