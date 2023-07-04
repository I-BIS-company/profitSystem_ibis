import { Link } from "@chakra-ui/react";
import { memo, FC } from "react";
import { EditIcon } from "@chakra-ui/icons";

type Props = {
  text: string;
};

export const SBSubItem: FC<Props> = memo((props) => {
  const { text } = props;

  return (
    <>
      <Link mt="10px" _hover={{ textDecoration: "none" }}>
        <EditIcon mr="8px" />
        {text}
      </Link>
    </>
  );
});
