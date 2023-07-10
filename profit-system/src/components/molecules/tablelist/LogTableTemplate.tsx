import { Box, Table, Tbody, Thead, Tr } from "@chakra-ui/react";
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
            <TableHead text="担当者名" />
            <TableHead text="担当案件" />
            <TableHead text="時間(工数)" />
          </Tr>
        </Thead>

        <Tbody alignItems="center">
          <Tr fontSize="14">
            <TableBody text="ユーザ 太郎" />
            <TableBody text="xxxxシステム開発" />
            <TableBody text="10時間" />

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt="2.5"
            >
              <SecondaryButton text="編集" size="sm" />
            </Box>
          </Tr>
          <Tr fontSize="14">
            <TableBody text="ユーザ 太郎" />
            <TableBody text="xxxxシステム開発" />
            <TableBody text="10時間" />

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              pt="2.5"
            >
              <SecondaryButton text="編集" size="sm" />
            </Box>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
});
