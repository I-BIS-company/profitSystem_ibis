import { FC, memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SocondaryButton";

export const Log: FC = memo(() => {
    return (
        <>
        <p>ログページです</p>
        <PrimaryButton Text="登録" />
        <br />
        <br />
        <SecondaryButton Text="編集"/>
        </>
        );
});