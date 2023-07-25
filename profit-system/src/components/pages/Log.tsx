import { Box } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { DateSearchSelect } from "../atoms/box/DateSearchBox";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { LogDate } from "../atoms/LogDate";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { LogTableTemplateList } from "../molecules/list/LogTableTemplateList";
import { IconButton } from "../atoms/button/IconButton";

export const Log: FC = memo(() => {
  const [selectedMonth, setSelectedMonth] = useState<string>("2023/06");

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value;
    setSelectedMonth(selectedMonth);
    console.log(selectedMonth);
  };

  return (
    <>
      <HeadLine text="ログ" />
      <MainScreenTopContainer>
        <DateSearchSelect value={selectedMonth} onChange={handleMonthChange} />
        <Box>
          <IconButton text="工数を登録する" />
        </Box>
      </MainScreenTopContainer>
      {selectedMonth === "2023/06" && (
        <Box>
          <LogDate date="2023/6/2" />
          <ContentBgTemplate>
            <LogTableTemplateList />
          </ContentBgTemplate>
          <LogDate date="2023/6/1" />
          <ContentBgTemplate>
            <LogTableTemplateList />
          </ContentBgTemplate>
        </Box>
      )}
      {selectedMonth === "2023/07" && (
        <Box>
          <LogDate date="2023/7" />
          <ContentBgTemplate>
            <LogTableTemplateList />
          </ContentBgTemplate>
        </Box>
      )}
      {selectedMonth === "2023/08" && (
        <Box>
          <LogDate date="2023/8" />
          <ContentBgTemplate>
            <LogTableTemplateList />
          </ContentBgTemplate>
        </Box>
      )}
    </>
  );
});
