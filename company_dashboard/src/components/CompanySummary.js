// src/components/CompanySummary.js

import React from 'react';
import { Link } from 'react-router-dom';

const CompanySummary = ({ data }) => {
  if (!data || !data.companySummary) {
    return <div>Loading...</div>;
  }

  const { companySummary } = data;

  return (
    <section>
      <Link to="/">Back</Link>
      <h2>Company Summary</h2>
      <p><strong>Business Name:</strong> {companySummary.businessName}</p>
      <p><strong>Country:</strong> {companySummary.country}</p>
      <p><strong>Company Number:</strong> {companySummary.companyNumber}</p>
      <p><strong>Main Activity:</strong> {companySummary.mainActivity.description}</p>
      <p><strong>Company Status:</strong> {companySummary.companyStatus.description}</p>
    </section>
  );
};

export default CompanySummary;
