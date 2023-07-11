import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  text: string;
  size: string;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { text, size } = props;
  return (
    <Button
      bg="green.400"
      color="white"
      size={size}
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
