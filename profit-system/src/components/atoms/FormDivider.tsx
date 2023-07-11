import { Divider } from "@chakra-ui/react";
import { memo, FC } from "react";

export const FormDivider: FC = memo(() => {
  return <Divider m="auto" borderColor="blackAlpha.400" w="92%" />;
});
