import { Box } from "@chakra-ui/react";
import { memo, FC, useState, useEffect } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { PrimarySearchButton } from "../atoms/button/PrimarySearchButton";
import { ProjectTableTemplateList } from "../molecules/list/ProjectTableTemplateList";
import { IconButton } from "../atoms/button/IconButton";
import { ProjectDbType } from "../../types/project/ProjectDbType";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const ProjectsList: FC = memo(() => {
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState<ProjectDbType[]>([]);

  useEffect(() => {
    const getProjectData = async () => {
      const projectList: ProjectDbType[] = [];
      const querySnapshot = await getDocs(collection(db, "project"));
      querySnapshot.forEach((doc) => {
        projectList.push({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
        });
      });
      setProjectData(projectList);
    };
    getProjectData();
  }, []);

  const onClickRegisterPage = () => {
    navigate("/projects_list/project_register");
  };

  return (
    <>
      <HeadLine text="案件一覧" />
      <MainScreenTopContainer>
        <PrimarySearchButton text="案件名" />
        <Box>
          <IconButton text="案件を登録する" onClick={onClickRegisterPage} />
        </Box>
      </MainScreenTopContainer>
      <ContentBgTemplate>
        <ProjectTableTemplateList projectList={projectData} />
      </ContentBgTemplate>
    </>
  );
});
