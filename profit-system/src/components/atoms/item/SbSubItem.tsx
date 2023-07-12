import { Link } from "@chakra-ui/react";
import { memo, FC } from "react";
import { EditIcon } from "@chakra-ui/icons";
import { Location } from "react-router-dom";

type Props = {
  text: string;
  path: string;
  location: Location;
};

export const SbSubItem: FC<Props> = memo((props) => {
  const { text, path, location } = props;

  const findPath = location.pathname.indexOf(path);
  const matchPath = findPath === 0;

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
