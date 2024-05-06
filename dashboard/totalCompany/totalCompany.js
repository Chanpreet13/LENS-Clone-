import "./totalCompany.css";
const TotalCompany = () => {
  return (
    <>
      <div className="totalCompanyParent">
        <div className="totalCompanyContentParent">
          <p className="companyHeading">By the numbers</p>

          <div className="companyContentParent">
            <div className="differentCompaniesParent">
              <p className="totalNumbers">
                15<span className="plus">+</span>
              </p>
              <p className="companyMotto">Solutions for Global crises</p>
            </div>

            <div className="differentCompaniesParent">
              <p className="totalNumbers">
                10<span className="plus">+</span>
              </p>
              <p className="companyMotto">University Collaborations</p>
            </div>

            <div className="differentCompaniesParent lastDifferentCompaniesParent ">
              <p className="totalNumbers">
                25<span className="plus">+</span>
              </p>
              <p className="companyMotto">Employees Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalCompany;
