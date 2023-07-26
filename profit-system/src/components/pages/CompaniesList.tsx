import { Box } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent, useEffect } from "react";
import { HeadLine } from "../atoms/HeadLine";
import { MainScreenTopContainer } from "../molecules/container/MainScreenTopContainer";
import { ContentBgTemplate } from "../molecules/container/ContentBgTemplateContainer";
import { PrimarySearchButton } from "../atoms/button/PrimarySearchButton";
import { CompaniesTableTemplateList } from "../molecules/list/CompaniesTableTemplateList";
import { IconButton } from "../atoms/button/IconButton";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { CompanyDbType } from "../../types/company/CompanyDbType";

export const CompaniesList: FC = memo(() => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [companyData, setCompanyData] = useState<CompanyDbType[]>([]);
  const [filteredCompanyList, setFilteredCompanyList] = useState<
    CompanyDbType[]
  >([]);

  const handleSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const getCompanyData = async () => {
      const companyList: CompanyDbType[] = [];
      const querySnapshot = await getDocs(collection(db, "company"));
      querySnapshot.forEach((doc) => {
        companyList.push({
          id: doc.id,
          name: doc.data().name,
          address: doc.data().address,
          postCode: doc.data().postCode,
          phone: doc.data().phone,
        });
      });
      setCompanyData(companyList);
      setFilteredCompanyList(companyList);
    };
    getCompanyData();
  }, []);

  const onClickFilter = () => {
    const filteredCompany = companyData.filter((company) => {
      if (company.name.indexOf(searchValue) !== -1) {
        return company;
      }
    });
    setFilteredCompanyList(filteredCompany);
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
