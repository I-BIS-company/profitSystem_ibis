import { FormControl } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { PostNumFormItem } from "../../molecules/item/PostNumFormItem";
import { PhoneFormItem } from "../../molecules/item/PhoneFormItem";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate } from "react-router";

export const CompanyRegisterForm: FC = memo(() => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [companyPostCode1, setCompanyPostCode1] = useState("");
  const [companyPostCode2, setCompanyPostCode2] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPhone1, setCompanyPhone1] = useState("");
  const [companyPhone2, setCompanyPhone2] = useState("");
  const [companyPhone3, setCompanyPhone3] = useState("");

  const handleCompanyName = (newValue: string) => {
    setCompanyName(newValue);
  };
  const handleCompanyAddress = (newValue: string) => {
    setCompanyAddress(newValue);
  };
  const handleCompanyPostCode1 = (newValue: string) => {
    setCompanyPostCode1(newValue);
  };
  const handleCompanyPostCode2 = (newValue: string) => {
    setCompanyPostCode2(newValue);
  };
  const handleCompanyPhone1 = (newValue: string) => {
    setCompanyPhone1(newValue);
  };
  const handleCompanyPhone2 = (newValue: string) => {
    setCompanyPhone2(newValue);
  };
  const handleCompanyPhone3 = (newValue: string) => {
    setCompanyPhone3(newValue);
  };

  const onClickRegister = async () => {
    await addDoc(collection(db, "company"), {
      name: companyName,
      postCode: `${companyPostCode1}-${companyPostCode2}`,
      address: companyAddress,
      phone: `${companyPhone1}-${companyPhone2}-${companyPhone3}`,
    });
    navigate("/companies_list");
  };

  const onClickBack = () => {
    navigate("/companies_list");
  };

  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem text="顧客名" handleValueChange={handleCompanyName} />
        <PostNumFormItem
          handleValueChange1={handleCompanyPostCode1}
          handleValueChange2={handleCompanyPostCode2}
        />
        <PrimaryFormItem text="住所" handleValueChange={handleCompanyAddress} />
        <PhoneFormItem
          handleValueChange1={handleCompanyPhone1}
          handleValueChange2={handleCompanyPhone2}
          handleValueChange3={handleCompanyPhone3}
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
