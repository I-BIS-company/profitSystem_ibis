import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import {
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TableHeadItem } from "../atoms/item/TableHeadItem";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { FormButtonContainer } from "../molecules/container/FormButtonContainer";

export const UserEdit: FC = memo(() => {
  return (
    <>
      <HeadLine text="ユーザ編集" />
      <ContentBgTemplate>
        <TableContainer h="300px" p="50px">
          <Table variant="simple" border="1px" borderColor="blackAlpha.200">
            <Thead>
              <Tr>
                <TableHeadItem text="ユーザ名" sideBorder={true} />
                <TableHeadItem text="権限" sideBorder={true} />
                <TableHeadItem text="作業コスト" sideBorder={true} />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td w="33%" border="1px" borderColor="blackAlpha.200">
                  <Input value="ユーザ五郎" />
                </Td>
                <Td w="33%" border="1px" borderColor="blackAlpha.200">
                  <Select>
                    <option value="投稿者">投稿者</option>
                    <option value="管理者">管理者</option>
                  </Select>
                </Td>
                <Td w="33%" border="1px" borderColor="blackAlpha.200">
                  <Input value="1500" />
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <FormButtonContainer gap="80px" h="130px" w="100%" secondaryPx="10" />
        </TableContainer>
      </ContentBgTemplate>
    </>
  );
});
