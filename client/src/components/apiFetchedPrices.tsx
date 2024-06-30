import React, { useState } from "react";
import Layout from "./Layout";
import { useData } from './dataContext';

const ApiFetchedPrice: React.FC = () => {
  const { names, means } = useData();
  return (
    <Layout>
         <div>
      <h1>Names and Means</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}: {means[index]}
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default ApiFetchedPrice;
