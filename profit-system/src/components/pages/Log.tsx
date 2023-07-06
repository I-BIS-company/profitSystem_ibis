import { FC, memo } from "react";
import { Sidebar } from "../organisms/Sidebar";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Log: FC = memo(() => {
    return (
      <>
        <Sidebar />
        <p>ログページです</p>;
        <PrimaryButton Text="登録" />
        <br />
        <SecondaryButton Text="編集"/>
        </>
        );
});