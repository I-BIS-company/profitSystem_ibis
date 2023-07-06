import { Link } from "@chakra-ui/react";
import { memo, FC } from "react";
import { EditIcon } from "@chakra-ui/icons";

type Props = {
  text: string;
  path: string;
};

export const SbSubItem: FC<Props> = memo((props) => {
  const { text, path } = props;

  return (
    <>
      <Link href={path} mt="10px" _hover={{ textDecoration: "none" }}>
        <EditIcon mr="8px" />
        {text}
      </Link>
    </>
  );
});
