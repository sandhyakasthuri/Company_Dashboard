// src/components/ContactInformation.js

import React from 'react';

const ContactInformation = ({ data }) => {
  const { contactInformation } = data;

  return (
    <section>
      <h2>Contact Information</h2>
      <p><strong>Address:</strong> {contactInformation.mainAddress.simpleValue}</p>
      <p><strong>Telephone:</strong> {contactInformation.mainAddress.telephone}</p>
      <p><strong>Websites:</strong> {contactInformation.websites.join(', ')}</p>
    </section>
  );
};

export default ContactInformation;
