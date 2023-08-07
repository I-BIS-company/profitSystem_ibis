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
  const [selectedMonth, setSelectedMonth] = useState("");
  const [monthList, setMonthList] = useState<string[]>([]);
  const [logData, setLogData] = useState<LogDbType[]>([]);
  const [filteredLogData, setFilteredLogData] = useState<LogDbType[]>([]);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value;
    setSelectedMonth(selectedMonth);
  };

  useEffect(() => {
    const getLogData = async () => {
      const logDataList: LogDbType[] = [];
      const logMonthDataList: string[] = [];
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
        const formatedWorkMonth = formattedWorkDay
          .split("/")
          .slice(0, 2)
          .join("/");
        if (!logMonthDataList.includes(formatedWorkMonth)) {
          logMonthDataList.push(formatedWorkMonth);
        }
        const changeMonthToDate = (strDate: string): Date => {
          const [year, month] = strDate.split("/");
          return new Date(Number(year), Number(month) - 1);
        };
        logMonthDataList.sort(
          (a, b) =>
            changeMonthToDate(b).getTime() - changeMonthToDate(a).getTime()
        );
      });
      setMonthList(logMonthDataList);
      setLogData(logDataList);
    };
    getLogData();
  }, []);

  useEffect(() => {
    const filteredLogDataList = logData.filter((data) => {
      if (selectedMonth == "") {
        setSelectedMonth(monthList[0]);
      } else if (data.workDay.indexOf(selectedMonth) !== -1) {
        return data;
      }
    });
    setFilteredLogData(filteredLogDataList);
  }, [selectedMonth, logData, monthList]);

  const onClickRegisterPage = () => {
    navigate("/log/workhour_register");
  };

  return (
    <>
      <HeadLine text="ログ" />
      <MainScreenTopContainer>
        <DateSearchSelect
          value={selectedMonth}
          onChange={handleMonthChange}
          logMonthList={monthList}
        />
        <Box>
          <IconButton text="工数を登録する" onClick={onClickRegisterPage} />
        </Box>
      </MainScreenTopContainer>
      {filteredLogData.map((data) => (
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
