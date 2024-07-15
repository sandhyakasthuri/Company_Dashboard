// src/Fetch.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllDetails from './AllDetails';
import AdditionalInfo from './AdditionalInfo';
import axios from 'axios';

const Viewpane = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        setData(response.data.report);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/details" element={<AllDetails data={data} />} />
          <Route path="/additional-info" element={<AdditionalInfo data={data.additionalInformation} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Viewpane;
