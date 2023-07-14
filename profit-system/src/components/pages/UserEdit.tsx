import { memo, FC } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { UserEditTable } from "../organisms/UserEditTable";

export const UserEdit: FC = memo(() => {
  return (
    <>
      <HeadLine text="ユーザ編集" />
      <ContentBgTemplate>
        <UserEditTable />
      </ContentBgTemplate>
    </>
  );
});
