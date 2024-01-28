import React from 'react';
import researchData from '../data/researchData';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Research Topics</h2>
      <div className="list-group">
        {researchData.map((paper, index) => (
          <Link key={index} to={`/${paper.id}`} className="list-group-item list-group-item-action">{paper.title}</Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
