import { FormControl } from "@chakra-ui/react";
import { memo, FC, useState, useEffect } from "react";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { ProjectSelectForm } from "../../molecules/form/ProjectSelectForm";
import { WorkhourSelectForm } from "../../molecules/form/WorkhourSelectForm";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { ProjectNameListType } from "../../../types/project/ProjectNameListType";

export const WorkhourEditForm: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state.id;
  const logDocRef = doc(db, "log", id);

  const [inChargeProject, setInChargeProject] = useState(
    location.state.inChargeProject
  );
  const [workHours, setWorkHours] = useState(location.state.workHours);
  const [projectNameList, setProjectNameList] = useState<ProjectNameListType[]>(
    []
  );

  const handleChargeProject = (value: string) => {
    setInChargeProject(value);
  };

  const handleWorkHour = (value: string) => {
    setWorkHours(Number(value));
  };

  useEffect(() => {
    const getProjectNameData = async () => {
      const projectList: ProjectNameListType[] = [];
      const querySnapshot = await getDocs(collection(db, "project"));
      querySnapshot.forEach((doc) => {
        projectList.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
      setProjectNameList(projectList);
    };
    getProjectNameData();
  }, []);

  const onClickEdit = async () => {
    await updateDoc(logDocRef, {
      inChargeProject: inChargeProject,
      workHours: workHours,
    });
    onClickBack();
  };

  const onClickBack = () => {
    navigate("/log");
  };

  return (
    <MainContentContainer>
      <FormControl
        w="50%"
        h="100%"
        mx="auto"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display="flex"
      >
        <ProjectSelectForm
          value={inChargeProject}
          projectNameList={projectNameList}
          onChangeProject={handleChargeProject}
        />
        <WorkhourSelectForm
          value={workHours}
          onChangeWorkHour={handleWorkHour}
        />
        <FormButtonContainer
          primaryText="更新"
          secondaryPx="10"
          primaryOnClick={onClickEdit}
          secondaryOnClick={onClickBack}
        />
      </FormControl>
    </MainContentContainer>
  );
});
