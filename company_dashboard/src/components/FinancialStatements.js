// src/components/FinancialStatements.js

import React from 'react';

const FinancialStatements = ({ data }) => {
  const { financialStatements } = data;

  return (
    <section>
      <h2>Financial Statements</h2>
      {financialStatements.map((statement, index) => (
        <div key={index}>
          <p><strong>Year End Date:</strong> {new Date(statement.yearEndDate).toLocaleDateString()}</p>
          <p><strong>Total Assets:</strong> {statement.balanceSheet.totalAssets}</p>
          <p><strong>Total Liabilities:</strong> {statement.balanceSheet.totalLiabilities}</p>
          <p><strong>Net Worth:</strong> {statement.otherFinancials.netWorth}</p>
        </div>
      ))}
    </section>
  );
};

export default FinancialStatements;
