import { FormControl } from "@chakra-ui/react";
import { memo, FC, useEffect, useState } from "react";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { ProjectSelectForm } from "../../molecules/form/ProjectSelectForm";
import { WorkhourSelectForm } from "../../molecules/form/WorkhourSelectForm";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../firebase";
import { Timestamp, addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { ProjectNameListType } from "../../../types/project/ProjectNameListType";

export const WorkhourRegisterForm: FC = memo(() => {
  const navigate = useNavigate();
  const today = Timestamp.fromDate(new Date());
  const [userName, setUserName] = useState<string | null>("");
  const [inChargeProject, setInChargeProject] = useState("");
  const [workHour, setWorkHour] = useState(0);
  const [projectNameList, setProjectNameList] = useState<ProjectNameListType[]>(
    []
  );

  const handleChargeProject = (value: string) => {
    setInChargeProject(value);
  };

  const handleWorkHour = (value: string) => {
    setWorkHour(Number(value));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
      }
    });
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

  const onClickRegister = async () => {
    await addDoc(collection(db, "log"), {
      name: userName,
      inChargeProject: inChargeProject,
      workDay: today,
      workHours: workHour,
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
          projectNameList={projectNameList}
          onChangeProject={handleChargeProject}
        />
        <WorkhourSelectForm
          onChangeWorkHour={handleWorkHour}
          value={workHour}
        />
        <FormButtonContainer
          secondaryPx="10"
          primaryOnClick={onClickRegister}
          secondaryOnClick={onClickBack}
        />
      </FormControl>
    </MainContentContainer>
  );
});
