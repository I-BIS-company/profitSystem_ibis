import { FormControl } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { ProjectCostItem } from "../../atoms/item/ProjectCostItem";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const ProjectEditForm: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const docId = location.state.docId;
  const projectDocRef = doc(db, "project", docId);

  const [projectName, setProjectName] = useState(location.state.name);
  const [projectPrice, setProjectPrice] = useState(location.state.price);

  const handleProjectName = (newValue: string) => {
    setProjectName(newValue);
  };
  const handleProjectPrice = (numberValue: string) => {
    setProjectPrice(Number(numberValue));
  };

  const onClickEdit = async () => {
    await updateDoc(projectDocRef, {
      name: projectName,
      price: projectPrice,
    });
    navigate("/projects_list");
  };

  const onClickBack = () => {
    navigate("/projects_list");
  };

  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem
          text="案件名"
          value={projectName}
          handleValueChange={handleProjectName}
        />
        <ProjectCostItem
          text="案件金額"
          value={projectPrice}
          handleValueChange={handleProjectPrice}
        />
        <FormButtonContainer
          primaryText="更新"
          secondaryPx="10"
          ml="50px"
          primaryOnClick={onClickEdit}
          secondaryOnClick={onClickBack}
        />
      </MainContentContainer>
    </FormControl>
  );
});
