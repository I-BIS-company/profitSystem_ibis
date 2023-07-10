import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  text: string;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { text } = props;
  return (
    <Button
      bg="green.400"
      color="white"
      size="lg"
      py={2}
      px={16}
      shadow="md"
      variant="outline"
      _hover={{ opacity: 0.8 }}
    >
      {text}
    </Button>
  );
});
