import { Box, Td } from "@chakra-ui/react";
import { FC } from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

type Props = {
  onClick?: () => void;
};

export const EditItem: FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <Td
      border="none"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" justifyContent="center" alignItems="center" pt="2.5">
        <SecondaryButton text="編集" size="sm" onClick={onClick} />
      </Box>
    </Td>
  );
};
