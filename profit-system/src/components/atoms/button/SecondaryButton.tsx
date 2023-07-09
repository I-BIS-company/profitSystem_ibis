import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  Text: string;
  Size: string;
};

export const SecondaryButton: FC<Props> = memo((props) => {
  const { Text, Size } = props;
  return (
    <Button
      bg="white"
      color="blackAlpha.900"
      size={Size}
      py={2}
      px={6}
      shadow="md"
      variant="outline"
      borderColor="black"
      _hover={{ opacity: 0.8 }}
    >
      {Text}
    </Button>
  );
});
