import { Box, Td } from "@chakra-ui/react";
import { FC } from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const EditItem: FC = () => {
  return (
    <Td
      border="none"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" justifyContent="center" alignItems="center" pt="2.5">
        <SecondaryButton text="編集" size="sm" />
      </Box>
    </Td>
  );
};
