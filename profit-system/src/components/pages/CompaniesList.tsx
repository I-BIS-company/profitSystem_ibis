import { Box } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { PrimarySearchButton } from "../atoms/button/PrimarySearchButton";
import { CompaniesTableTemplateList } from "../molecules/list/CompaniesTableTemplateList";
import { IconButton } from "../atoms/button/IconButton";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

type CompanyDbType = {
  id: string;
  name: string;
  address: string;
  postCode: string;
  phone: string;
};

export const CompaniesList: FC = memo(() => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [filteredCompanyList, setFilteredCompanyList] = useState<
    CompanyDbType[]
  >([]);

  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickFilter = async () => {
    const filteredCompanyListData: CompanyDbType[] = [];
    const q = query(
      collection(db, "company"),
      where("name", "==", searchValue)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filteredCompanyListData.push({
        id: doc.id,
        name: doc.data().name,
        address: doc.data().address,
        postCode: doc.data().postCode,
        phone: doc.data().phone,
      });
    });
    setFilteredCompanyList(filteredCompanyListData);
  };

  const onClickRegisterPage = () => {
    navigate("/companies_list/company_register");
  };

  return (
    <>
      <HeadLine text="顧客一覧" />
      <MainScreenTopContainer>
        <PrimarySearchButton
          text="顧客名"
          handleSearchText={handleSearchText}
          onClick={onClickFilter}
        />
        <Box>
          <IconButton text="顧客名を登録する" onClick={onClickRegisterPage} />
        </Box>
      </MainScreenTopContainer>
      <ContentBgTemplate>
        <CompaniesTableTemplateList filteredCompanyList={filteredCompanyList} />
      </ContentBgTemplate>
    </>
  );
});
