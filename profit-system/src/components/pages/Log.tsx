import { Box } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { DateSearchSelect } from "../atoms/box/DateSearchBox";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { LogDate } from "../atoms/LogDate";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { LogTableTemplateList } from "../molecules/list/LogTableTemplateList";
import { IconButton } from "../atoms/button/IconButton";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

type LogDbType = {
  id: string;
  inChargeProject: string;
  name: string;
  workDay: string;
  workHours: number;
};

export const Log: FC = memo(() => {
  const navigate = useNavigate();
  const [selectedMonth, setSelectedMonth] = useState<string>("2023/06");
  const [logData, setLogData] = useState<LogDbType[]>([]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value;
    setSelectedMonth(selectedMonth);
  };

  useEffect(() => {
    const getLogData = async () => {
      const logDataList: LogDbType[] = [];
      const querySnapshot = await getDocs(collection(db, "log"));
      querySnapshot.forEach((doc) => {
        const workDayTimestamp = doc.data().workDay;
        const workDayDate = workDayTimestamp.toDate();
        const YYYY = workDayDate.getFullYear();
        const MM = workDayDate.getMonth() + 1;
        const DD = workDayDate.getDate();
        const formattedWorkDay = `${YYYY}/${MM}/${DD}`;
        logDataList.push({
          id: doc.id,
          inChargeProject: doc.data().inChargeProject,
          name: doc.data().name,
          workDay: formattedWorkDay,
          workHours: doc.data().workHours,
        });
        const changeToDate = (strDate: string): Date => {
          const [year, month, day] = strDate.split("/");
          return new Date(Number(year), Number(month) - 1, Number(day));
        };
        logDataList.sort(
          (a, b) =>
            changeToDate(b.workDay).getTime() -
            changeToDate(a.workDay).getTime()
        );
      });
      setLogData(logDataList);
    };
    getLogData();
  }, []);

  const onClickRegisterPage = () => {
    navigate("/log/workhour_register");
  };

  return (
    <>
      <HeadLine text="ログ" />
      <MainScreenTopContainer>
        <DateSearchSelect value={selectedMonth} onChange={handleMonthChange} />
        <Box>
          <IconButton text="工数を登録する" onClick={onClickRegisterPage} />
        </Box>
      </MainScreenTopContainer>
      {logData.map((data) => (
        <Box key={data.id}>
          <LogDate date={data.workDay} />
          <ContentBgTemplate>
            <LogTableTemplateList
              id={data.id}
              name={data.name}
              inChargeProject={data.inChargeProject}
              workHours={data.workHours}
            />
          </ContentBgTemplate>
        </Box>
      ))}
    </>
  );
});
