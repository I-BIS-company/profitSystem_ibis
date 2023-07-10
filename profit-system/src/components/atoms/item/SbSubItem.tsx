import { Link } from "@chakra-ui/react";
import { memo, FC } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";

type Props = {
  text: string;
  path: string;
};

export const SbSubItem: FC<Props> = memo((props) => {
  const { text, path } = props;

  const location = useLocation();
  const matchPath = location.pathname === path;

  return (
    <>
      <Link
        href={path}
        mt="10px"
        _hover={{ textDecoration: "none" }}
        bgColor={matchPath ? "blue.500" : ""}
        borderRadius={matchPath ? "10px" : ""}
        color={matchPath ? "white" : ""}
        px="15px"
      >
        <EditIcon mr="8px" />
        {text}
      </Link>
    </>
  );
});
