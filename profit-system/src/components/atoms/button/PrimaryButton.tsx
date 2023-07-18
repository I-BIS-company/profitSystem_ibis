import { Button, Text } from "@chakra-ui/react";
import { FC, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  text: string;
  size?: string;
  showIcon?: boolean;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { text, size, showIcon } = props;
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
      {showIcon && (
        <Text pr="8px">
          <FontAwesomeIcon icon={faUserPlus} />
        </Text>
      )}
      {text}
    </Button>
  );
});
