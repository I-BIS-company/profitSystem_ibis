import { memo, FC, ReactNode } from "react";
import { Sidebar } from "../organisms/sidebar/Sidebar";

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
