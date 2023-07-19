import { Button } from "@chakra-ui/react";
import { signInWithPopup } from "@firebase/auth";
import { FC, memo } from "react";
import { auth, provider } from "../../../firebase";
import { useNavigate } from "react-router-dom";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

export const LoginButton: FC = memo(() => {
  const navigate = useNavigate();
  const Firestore = getFirestore();

  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);

      // 初回ログイン時のユーザ情報をFirestoreに保存する
      if (auth.currentUser) {
        const { uid, displayName } = auth.currentUser;

        // Firestoreへの参照を作成
        const usersCollectionRef = collection(Firestore, "users");

        // ユーザ情報を登録するドキュメントの参照を作成
        const userDocRef = doc(usersCollectionRef, uid);

        // ユーザ情報を登録
        await setDoc(userDocRef, {
          id: uid,
          name: displayName,
        });
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
