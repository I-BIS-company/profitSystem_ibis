import { Button } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { FC, memo, useEffect, useState } from "react";
import { auth, provider } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  getFirestore,
  setDoc,
  getDoc,
} from "firebase/firestore";

export const LoginButton: FC = memo(() => {
  const navigate = useNavigate();
  const firestore = getFirestore();
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    checkRegistration();
  }, []);

  const checkRegistration = async () => {
    if (auth.currentUser) {
      const { uid } = auth.currentUser;
      const userDocRef = doc(collection(firestore, "users"), uid);
      const docSnapshot = await getDoc(userDocRef);
      setIsRegistered(
        docSnapshot.exists() && docSnapshot.data().registered === true
      );
    }
  };

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);

      if (auth.currentUser) {
        const { uid, displayName } = auth.currentUser;

        if (!isRegistered) {
          const userDocRef = doc(collection(firestore, "users"), uid);
          await setDoc(userDocRef, {
            id: uid,
            name: displayName,
            registered: true,
          });
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
