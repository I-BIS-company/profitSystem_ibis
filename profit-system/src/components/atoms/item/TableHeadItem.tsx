// import { Th } from "@chakra-ui/react";
// import { FC } from "react";

// type Props = {
//   text: string;
//   width?: string;
// };

// export const TableHeadItem: FC<Props> = (props) => {
//   const { text, width } = props;

//   return (
//     <Th
//       color="blue.500"
//       fontSize="16"
//       borderRight="1px solid"
//       borderRightColor="blackAlpha.200"
//       w={width}
//     >
//       {text}
//     </Th>
//   );
// };
import { Th } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text: string;
  width?: string;
  borderRightColor?: boolean;
};

export const TableHeadItem: FC<Props> = (props) => {
  const { text, width, borderRightColor = true } = props;

  return (
    <Th
      color="blue.500"
      fontSize="16"
      borderRight="1px solid"
      borderRightColor={borderRightColor ? "blackAlpha.200" : undefined}
      w={width}
    >
      {text}
    </Th>
  );
};
