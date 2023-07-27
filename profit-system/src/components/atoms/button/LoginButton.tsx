import { Button } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { FC, memo } from "react";
import { auth, db, provider } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

export const LoginButton: FC = memo(() => {
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);

      if (auth.currentUser) {
        const { uid, displayName } = auth.currentUser;
        const userDocRef = doc(collection(db, "users"), uid);
        const docSnapshot = await getDoc(userDocRef);
        const isRegistered = docSnapshot.exists();
        if (!isRegistered) {
          const data = {
            id: uid,
            name: displayName,
          };
          await setDoc(doc(db, "users", uid), data);
        }
      }

      navigate("/log");
    } catch (error: any) {
      alert(error.message);
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
