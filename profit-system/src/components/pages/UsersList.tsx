import { FC, memo } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { UsersTableTemplateList } from "../molecules/list/UsersTableTemplateList";

export const UsersList: FC = memo(() => {
  return (
    <>
      <HeadLine text="ユーザ一覧" />
      <ContentBgTemplate>
        <UsersTableTemplateList />
      </ContentBgTemplate>
    </>
  );
});
