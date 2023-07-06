import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  Text: string;
};

export const PrimaryButton: FC<Props> = memo((props) => {
    const { Text } = props;
  return (
    <Button
        bg="green.400"
        color="white"
        size="lg"
        py={2}
        px={16}
        shadow="md"
        variant="outline"
        _hover={{opacity:.8}}
        >
        {Text}
    </Button>
    
  );
});