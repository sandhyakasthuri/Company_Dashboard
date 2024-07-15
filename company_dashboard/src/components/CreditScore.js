// src/components/CreditScore.js

import React from 'react';

const CreditScore = ({ data }) => {
  const { creditScore } = data;

  return (
    <section>
      <h2>Credit Score</h2>
      <p><strong>Risk:</strong> {creditScore.currentCreditRating.commonDescription}</p>
      <p><strong>Credit Limit:</strong> {creditScore.currentCreditRating.creditLimit.value} {creditScore.currentCreditRating.creditLimit.currency}</p>
      <p><strong>Provider Value:</strong> {creditScore.currentCreditRating.providerValue.value}</p>
    </section>
  );
};

export default CreditScore;
