import { FC, memo, useState, useEffect } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { UsersTableTemplateList } from "../molecules/list/UsersTableTemplateList";
import { UserDbType } from "../../types/user/UserDbType";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const UsersList: FC = memo(() => {
  const [userData, setUserData] = useState<UserDbType[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      const userList: UserDbType[] = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        userList.push({
          id: doc.data().id,
          name: doc.data().name,
          workHourCost: doc.data().workHourCost,
          isAdmin: doc.data().isAdmin,
        });
      });
      setUserData(userList);
    };
    getUserData();
  }, []);

  return (
    <>
      <HeadLine text="ユーザ一覧" />
      <ContentBgTemplate>
        <UsersTableTemplateList userList={userData} />
      </ContentBgTemplate>
    </>
  );
});
