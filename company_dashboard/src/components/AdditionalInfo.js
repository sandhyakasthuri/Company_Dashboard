// src/components/AdditionalInfo.js

import React from 'react';

const AdditionalInfo = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const DisplayDetails = ({ obj }) => {
    return (
      <div>
        {obj && Object.keys(obj).map(key => (
          <div key={key}>
            <span><strong>{key}:</strong></span> <span>{obj[key]}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>Additional Information</h1>
      <section><h2>Miscellaneous</h2><DisplayDetails obj={data.miscellaneous} /></section>

      <section>
        <h2>Company History</h2>
        {
          data.companyHistory.length > 0 &&
          data.companyHistory.map((history, index) => (
            <div className='pb-3'><DisplayDetails obj={history} /></div>
          ))}
      </section>

      <section>
        <h2>Commentaries</h2>
        {
          data.commentaries.length > 0 &&
          data.commentaries.map((comment, index) => (
            <div className='pb-3'><DisplayDetails obj={comment} /></div>
          ))}
      </section>

      {/* {otherInformation.employeesInformation.length > 0 && (
        <section>
          <h2>Other Information</h2>
          {otherInformation.employeesInformation.map((info, index) => (
            <div key={index}>
              <p>Year: {
              year}</p>
              <p>Number of Employees: {info.numberOfEmployees}</p>
            </div>
          ))}
        </section>
      )}

      {personsWithSignificantControl.activePSC.length > 0 && (
        <section>
          <h2>Persons with Significant Control</h2>
          {personsWithSignificantControl.activePSC.map((psc, index) => (
            <div key={index}>
              <p>Name: {psc.name}</p>
              <p>Nature of Control: {psc.natureOfControl}</p>
            </div>
          ))}
        </section>
      )}

      {ratingHistory.length > 0 && (
        <section>
          <h2>Rating History</h2>
          {ratingHistory.map((rating, index) => (
            <div key={index}>
              <p>Date: {rating.date}</p>
              <p>Company Value: {rating.companyValue}</p>
              <p>Rating Description: {rating.ratingDescription}</p>
            </div>
          ))}
        </section>
      )}

      {additionalInformation.employeesInformation && (
        <section>
          <h2>Employees Information</h2>
          {additionalInformation.employeesInformation.map((info, index) => (
            <div key={index}>
              <p>Year: {info.year}</p>
              <p>Number of Employees: {info.numberOfEmployees}</p>
            </div>
          ))}
        </section>
      )}

      {additionalInformation.legalNotice && (
        <section>
          <h2>Legal Notices</h2>
          <p>{additionalInformation.legalNotice}</p>
        </section>
      )}

      {additionalInformation.advisors && (
        <section>
          <h2>Advisors</h2>
          {additionalInformation.advisors.map((advisor, index) => (
            <div key={index}>
              <p>Name: {advisor.accountantName}</p>
            </div>
          ))}
        </section>
      )}

      {additionalInformation.accountsDueDate && (
        <section>
          <h2>Accounts Due Date</h2>
          <p>{additionalInformation.accountsDueDate}</p>
        </section>
      )}

      {additionalInformation.filingDateOfAccounts && (
        <section>
          <h2>Filing Date of Accounts</h2>
          <p>{additionalInformation.filingDateOfAccounts}</p>
        </section>
      )} */}
    </div>
  );
};

export default AdditionalInfo;
