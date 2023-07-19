import { Button } from "@chakra-ui/react";
import { signInWithPopup } from "@firebase/auth";
import { FC, memo } from "react";
import { auth, provider } from "../../../firebase";

export const LoginButton: FC = memo(() => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <Button
      onClick={signIn}
      bg="orange.300"
      color="blackAlpha.900"
      size="lg"
      py={8}
      px={24}
      shadow="md"
      _hover={{ opacity: 0.8 }}
    >
      ログイン
    </Button>
  );
});
