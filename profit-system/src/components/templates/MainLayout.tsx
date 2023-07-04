import { memo, FC, ReactNode } from "react";
import { Sidebar } from "../organisms/layout/Sidebar";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      {children}
    </>
  );
});
