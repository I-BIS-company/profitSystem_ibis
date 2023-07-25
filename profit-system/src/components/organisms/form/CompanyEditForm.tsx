import { FormControl } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { PostNumFormItem } from "../../molecules/item/PostNumFormItem";
import { PhoneFormItem } from "../../molecules/item/PhoneFormItem";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const CompanyEditForm: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const docId = location.state.docId;
  const companyDocRef = doc(db, "company", docId);
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPostCode1, setCompanyPostCode1] = useState("");
  const [companyPostCode2, setCompanyPostCode2] = useState("");
  const [companyPhone1, setCompanyPhone1] = useState("");
  const [companyPhone2, setCompanyPhone2] = useState("");
  const [companyPhone3, setCompanyPhone3] = useState("");

  useEffect(() => {
    const getCompanyEditData = async () => {
      const companyDocSnap = await getDoc(companyDocRef);
      if (companyDocSnap.exists()) {
        setCompanyName(companyDocSnap.data().name);
        setCompanyAddress(companyDocSnap.data().address);
        const postCode = companyDocSnap.data().postCode;
        const postCode1 = postCode.split("-")[0];
        const postCode2 = postCode.split("-")[1];
        setCompanyPostCode1(postCode1);
        setCompanyPostCode2(postCode2);
        const phone = companyDocSnap.data().phone;
        const phone1 = phone.split("-")[0];
        const phone2 = phone.split("-")[1];
        const phone3 = phone.split("-")[2];
        setCompanyPhone1(phone1);
        setCompanyPhone2(phone2);
        setCompanyPhone3(phone3);
      } else {
        console.log("No such document!");
      }
    };
    getCompanyEditData();
  }, []);

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

  const onClickEdit = async () => {
    await updateDoc(companyDocRef, {
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
        <PrimaryFormItem
          text="顧客名"
          value={companyName}
          handleValueChange={handleCompanyName}
        />
        <PostNumFormItem
          value1={companyPostCode1}
          value2={companyPostCode2}
          handleValueChange1={handleCompanyPostCode1}
          handleValueChange2={handleCompanyPostCode2}
        />
        <PrimaryFormItem
          text="住所"
          value={companyAddress}
          handleValueChange={handleCompanyAddress}
        />
        <PhoneFormItem
          value1={companyPhone1}
          value2={companyPhone2}
          value3={companyPhone3}
          handleValueChange1={handleCompanyPhone1}
          handleValueChange2={handleCompanyPhone2}
          handleValueChange3={handleCompanyPhone3}
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
