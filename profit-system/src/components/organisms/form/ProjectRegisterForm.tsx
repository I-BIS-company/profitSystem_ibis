import { FormControl } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { ProjectCostItem } from "../../atoms/item/ProjectCostItem";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

export const ProjectRegisterForm: FC = memo(() => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [projectPrice, setProjectPrice] = useState(0);

  const handleProjectName = (newValue: string) => {
    setProjectName(newValue);
  };
  const handleProjectPrice = (numberValue: string) => {
    setProjectPrice(Number(numberValue));
  };

  const onClickRegister = async () => {
    await addDoc(collection(db, "project"), {
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
        <PrimaryFormItem text="案件名" handleValueChange={handleProjectName} />
        <ProjectCostItem
          text="案件金額"
          value={projectPrice}
          handleValueChange={handleProjectPrice}
        />
        <FormButtonContainer
          secondaryPx="10"
          ml="50px"
          primaryOnClick={onClickRegister}
          secondaryOnClick={onClickBack}
        />
      </MainContentContainer>
    </FormControl>
  );
});
