import { FormControl } from "@chakra-ui/react";
import { FC, memo, useState } from "react";
import { PrimaryFormItem } from "../../molecules/item/PrimaryFormItem";
// import { PostNumFormItem } from "../../molecules/item/PostNumFormItem";
// import { PhoneFormItem } from "../../molecules/item/PhoneFormItem";
import { FormButtonContainer } from "../../molecules/container/FormButtonContainer";
import { MainContentContainer } from "../../molecules/container/MainContentContainer";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../firebase";
import { useNavigate } from "react-router";

export const CompanyRegisterForm: FC = memo(() => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  // const [companyPostCode, setCompanyPostCode] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  // const [companyPhone, setCompanyPhone] = useState("");

  const handleCompanyName = (newValue: string) => {
    setCompanyName(newValue);
  };
  const handleCompanyAddress = (newValue: string) => {
    setCompanyAddress(newValue);
  };

  const onClickRegister = async () => {
    const docRef = await addDoc(collection(db, "company"), {
      name: companyName,
      // postCode: companyPostCode,
      address: companyAddress,
      // phone: companyPhone,
    });
    console.log(docRef);

    setCompanyName("");
    // setCompanyPostCode("");
    setCompanyAddress("");
    // setCompanyPhone("");

    navigate("/companies_list");
  };

  return (
    <FormControl>
      <MainContentContainer>
        <PrimaryFormItem text="顧客名" handleValueChange={handleCompanyName} />
        {/* <PostNumFormItem /> */}
        <PrimaryFormItem text="住所" handleValueChange={handleCompanyAddress} />
        {/* <PhoneFormItem /> */}
        <FormButtonContainer
          secondaryPx="10"
          ml="50px"
          onClick={onClickRegister}
        />
      </MainContentContainer>
    </FormControl>
  );
});
