import { FormControl } from "@chakra-ui/react";
import { FC, memo, useEffect, useState } from "react";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
import { PostNumFormItem } from "../../molecules/item/PostNumFormItem";
import { PhoneFormItem } from "../../molecules/item/PhoneFormItem";
import { useLocation } from "react-router-dom";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const CompanyEditForm: FC = memo(() => {
  const location = useLocation();
  const [companyEditData, setCompanyEditData] = useState<DocumentData>();
  const docId = location.state.docId;
  console.log(docId);

  const companyDocRef = doc(db, "company", docId);
  useEffect(() => {
    const getCompanyEditData = async () => {
      const companyDocSnap = await getDoc(companyDocRef);
      console.log(companyDocSnap.data());
      setCompanyEditData(companyDocSnap.data());
    };
    getCompanyEditData();
  }, []);
  console.log(companyEditData);
  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem text="顧客名" />
        <PostNumFormItem />
        <PrimaryFormItem text="住所" />
        <PhoneFormItem />
        <FormButtonContainer primaryText="更新" secondaryPx="10" ml="50px" />
      </MainContentContainer>
    </FormControl>
  );
});
