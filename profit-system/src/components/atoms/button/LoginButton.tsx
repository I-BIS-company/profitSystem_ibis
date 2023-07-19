import { Button } from "@chakra-ui/react";
import { signInWithPopup } from "@firebase/auth";
import { FC, memo } from "react";
import { auth, provider } from "../../../firebase";
import { useNavigate } from "react-router-dom";

export const LoginButton: FC = memo(() => {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/log");
    } catch (error: any) {
      console.log(error.message);
    }
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
