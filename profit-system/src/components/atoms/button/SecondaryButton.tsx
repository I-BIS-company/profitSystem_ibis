import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  text: string;
  size?: string;
  px?: string;
};

export const SecondaryButton: FC<Props> = memo((props) => {
  const { text, size, px } = props;
  return (
    <Button
      bg="white"
      color="blackAlpha.900"
      size={size}
      py={2}
      px={px}
      shadow="md"
      variant="outline"
      borderColor="black"
      _hover={{ opacity: 0.8 }}
    >
      {text}
    </Button>
  );
});
