// src/components/CompanyIdentification.js

import React from 'react';

const CompanyIdentification = ({ data }) => {
  const { companyIdentification } = data;

  return (
    <section>
      <h2>Company Identification</h2>
      <p><strong>VAT Registration Number:</strong> {companyIdentification.basicInformation.vatRegistrationNumber}</p>
      <p><strong>Legal Form:</strong> {companyIdentification.basicInformation.legalForm.description}</p>
    </section>
  );
};

export default CompanyIdentification;
