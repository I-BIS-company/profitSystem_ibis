// import { Button } from "@chakra-ui/react";
// import { signInWithPopup } from "@firebase/auth";
// import { FC, memo } from "react";
// import { auth, provider } from "../../../firebase";

// export const LoginButton: FC = memo(() => {
//   const signIn = () => {
//     signInWithPopup(auth, provider).catch((err) => {
//       alert(err.message);
//     });
//   };
//   return (
//     <Button
//       onClick={signIn}
//       bg="orange.300"
//       color="blackAlpha.900"
//       size="lg"
//       py={8}
//       px={24}
//       shadow="md"
//       _hover={{ opacity: 0.8 }}
//     >
//       ログイン
//     </Button>
//   );
// });

import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";
import { useHistory } from "react-router-dom";

export const LoginButton = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      history.push("/log");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleLogin}
      bg="orange.300"
      color="blackAlpha.900"
      size="lg"
      py={8}
      px={24}
      shadow="md"
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      loadingText="ログイン中..."
    >
      ログイン
    </Button>
  );
};
