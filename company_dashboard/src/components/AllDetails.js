import React from 'react';
import { Link } from 'react-router-dom';

const AllDetails = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    companySummary,
    companyIdentification,
    financialStatements,
    creditScore,
    contactInformation,
    shareCapitalStructure,
    directors,
    mortgageSummary,
    additionalInformation
  } = data;

  return (
    <section>
      <div>
        <h3>Company Summary</h3>
        <p><strong>Business Name:</strong> {companySummary?.businessName}</p>
        <p><strong>Country:</strong> {companySummary?.country}</p>
        <p><strong>Company Number:</strong> {companySummary?.companyNumber}</p>
        <p><strong>Main Activity:</strong> {companySummary?.mainActivity?.description}</p>
        <p><strong>Company Status:</strong> {companySummary?.companyStatus?.description}</p>
      </div>

      <div>
        <h3>Company Identification</h3>
        <p><strong>VAT Registration Number:</strong> {companyIdentification?.basicInformation?.vatRegistrationNumber}</p>
        <p><strong>Legal Form:</strong> {companyIdentification?.basicInformation?.legalForm?.description}</p>
      </div>

      <div>
        <h3>Financial Statements</h3>
        {financialStatements?.map((statement, index) => (
          <div key={index}>
            <p><strong>Year End Date:</strong> {statement?.yearEndDate}</p>
            <p><strong>Total Assets:</strong> {statement?.balanceSheet?.totalAssets}</p>
            <p><strong>Total Liabilities:</strong> {statement?.balanceSheet?.totalLiabilities}</p>
            <p><strong>Net Worth:</strong> {statement?.otherFinancials?.netWorth}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Credit Score</h3>
        <p><strong>Credit Rating:</strong> {creditScore?.currentCreditRating?.commonDescription}</p>
        <p><strong>Credit Limit:</strong> {creditScore?.currentCreditRating?.creditLimit?.value} {creditScore?.currentCreditRating?.creditLimit?.currency}</p>
        <p><strong>Provider Value:</strong> {creditScore?.currentCreditRating?.providerValue?.value}</p>
      </div>

      <div>
        <h3>Contact Information</h3>
        <p><strong>Address:</strong> {contactInformation?.mainAddress?.simpleValue}</p>
        <p><strong>Telephone:</strong> {contactInformation?.mainAddress?.telephone}</p>
        <p><strong>Website:</strong> {contactInformation?.websites?.[0]}</p>
      </div>

      <div>
        <h3>Share Capital Structure</h3>
        {shareCapitalStructure?.shareHolders?.map((shareholder, index) => (
          <div key={index}>
            <p><strong>Name:</strong> {shareholder?.name}</p>
            <p><strong>Total Number of Shares Owned:</strong> {shareholder?.totalNumberOfSharesOwned}</p>
            <p><strong>Percent Shares Held:</strong> {shareholder?.percentSharesHeld}%</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Directors</h3>
        {directors?.currentDirectors?.map((director, index) => (
          <div key={index}>
            <p><strong>Name:</strong> {director?.name}</p>
            <p><strong>Date of Birth:</strong> {director?.dateOfBirth}</p>
            <p><strong>Nationality:</strong> {director?.nationality}</p>
            <p><strong>Occupation:</strong> {director?.additionalData?.occupation}</p>
          </div>
        ))}
      </div>

      <div>
        <h3>Mortgage Summary</h3>
        <p><strong>Outstanding Mortgages:</strong> {additionalInformation?.mortgageSummary?.outstanding}</p>
        <p><strong>Satisfied Mortgages:</strong> {additionalInformation?.mortgageSummary?.satisfied}</p>
      </div>
    </section>
  );
};

export default AllDetails;
