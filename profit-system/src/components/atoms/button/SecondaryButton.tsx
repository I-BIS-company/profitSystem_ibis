import { Button } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  Text: string;
};

export const SecondaryButton: FC<Props> = memo((props) => {
    const { Text } = props;
  return (
    <Button
        bg="white"
        color="blackAlpha.900"
        size="md"
        py={2}
        px={6}
        shadow="md"
        variant="outline"
        borderColor="black"
        _hover={{opacity:.8}}
        >
        {Text}
    </Button>
    
  );
});