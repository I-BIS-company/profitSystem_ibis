import { Box, Table, TableContainer, Tbody, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHeadItem } from "../../atoms/item/TableHeadItem";
import { TableBodyItem } from "../../atoms/item/TableBodyItem";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";
import { EditItem } from "../../atoms/item/EditItem";

export const UsersTableTemplateList: FC = memo(() => {
  return (
    <TableContainer>
      <Table variant="simple" border="none">
        <Thead>
          <Tr>
            <TableHeadItem text="ユーザ名" />
            <TableHeadItem text="権限" />
            <TableHeadItem text="作業コスト" />
          </Tr>
        </Thead>

        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBodyItem text="ユーザ 太郎" />
            <TableBodyItem text="投稿者" />
            <TableBodyItem text="1,000円" />
            <EditItem>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="2.5"
              >
                <SecondaryButton text="編集" size="sm" />
              </Box>
            </EditItem>
          </Tr>
          <Tr fontSize="14">
            <TableBodyItem text="ユーザ 二郎" />
            <TableBodyItem text="投稿者" />
            <TableBodyItem text="1,200円" />
            <EditItem>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="2.5"
              >
                <SecondaryButton text="編集" size="sm" />
              </Box>
            </EditItem>
          </Tr>
          <Tr fontSize="14">
            <TableBodyItem text="ユーザ 花子" />
            <TableBodyItem text="管理者" />
            <TableBodyItem text="1,000円" />
            <EditItem>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="2.5"
              >
                <SecondaryButton text="編集" size="sm" />
              </Box>
            </EditItem>
          </Tr>
          <Tr fontSize="14">
            <TableBodyItem text="ユーザ 二郎" />
            <TableBodyItem text="投稿者" />
            <TableBodyItem text="1,500円" />
            <EditItem>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="2.5"
              >
                <SecondaryButton text="編集" size="sm" />
              </Box>
            </EditItem>
          </Tr>
          <Tr fontSize="14">
            <TableBodyItem text="ユーザ 太郎" />
            <TableBodyItem text="投稿者" />
            <TableBodyItem text="2,000円" />
            <EditItem>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                pt="2.5"
              >
                <SecondaryButton text="編集" size="sm" />
              </Box>
            </EditItem>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
});
