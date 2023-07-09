import { Divider, Link } from "@chakra-ui/react";
import { memo, FC } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  text: string;
  path: string;
};

export const SbMainItem: FC<Props> = memo((props) => {
  const { text, path } = props;

  const location = useLocation();
  const matchPath = location.pathname === path;

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
