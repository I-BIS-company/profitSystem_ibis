import { Divider, Link } from "@chakra-ui/react";
import { memo, FC } from "react";

type Props = {
  text: string;
};

export const SbMainItem: FC<Props> = memo((props) => {
  const { text } = props;

  return (
    <>
      <Link fontSize="xl" _hover={{ textDecoration: "none" }}>
        {text}
      </Link>
      <Divider width="200px" borderColor="BlackAlpha 800" />
    </>
  );
});
