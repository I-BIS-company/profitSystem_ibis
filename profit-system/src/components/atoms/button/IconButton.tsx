import { Button, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text: string;
  onClick?: () => void;
};

export const IconButton: FC<Props> = memo((props) => {
  const { text, onClick } = props;
  return (
    <Button
      bg="green.400"
      color="white"
      size="md"
      py={2}
      px={12}
      shadow="md"
      variant="outline"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      <Text pr="8px">
        <FontAwesomeIcon icon={faUserPlus} />
      </Text>
      {text}
    </Button>
  );
});
