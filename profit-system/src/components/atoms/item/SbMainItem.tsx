import { Divider, Link } from "@chakra-ui/react";
import { memo, FC } from "react";
import { Location } from "react-router-dom";

type Props = {
  text: string;
  path: string;
  location: Location;
};

export const SbMainItem: FC<Props> = memo((props) => {
  const { text, path, location } = props;

  const findPath = location.pathname.indexOf(path);
  const matchPath = findPath === 0;

  return (
    <>
      <Link
        href={path}
        fontSize="xl"
        _hover={{ textDecoration: "none" }}
        bgColor={matchPath ? "orange.100" : ""}
        borderRadius={matchPath ? "10px" : ""}
        px="25px"
        py="2px"
        mb="4px"
      >
        {text}
      </Link>
      <Divider width="200px" borderColor="BlackAlpha 800" />
    </>
  );
});
