import { Box, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { memo, FC } from "react";
import { TableHead } from "../../atoms/tableitems/TableHead";
import { TableBody } from "../../atoms/tableitems/TableBody";
import { SecondaryButton } from "../../atoms/button/SecondaryButton";

export const LogTableTemplate: FC = memo(() => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <TableHead Text="担当者名" />
            <TableHead Text="担当案件" />
            <TableHead Text="時間(工数)" />
          </Tr>
        </Thead>

        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBody Text="ユーザ 太郎" />
            <TableBody Text="xxxxシステム開発" />
            <TableBody Text="10時間" />

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt="2.5"
            >
              <SecondaryButton Text="編集" Size="sm" />
            </Box>
          </Tr>
          <Tr fontSize="14">
            <TableBody Text="ユーザ 太郎" />
            <TableBody Text="xxxxシステム開発" />
            <TableBody Text="10時間" />

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt="2.5"
            >
              <SecondaryButton Text="編集" Size="sm" />
            </Box>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
});
