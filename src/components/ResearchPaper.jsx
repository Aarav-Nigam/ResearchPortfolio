import React from 'react';
import researchData from '../data/researchData';
import { useParams } from 'react-router';

const ResearchPaper = () => {
  const params = useParams();
  const paperId = params.id;
  const paper = researchData.find(paper => paper.id === paperId);
  console.log("hello");
  console.log(paramsId);

  return (
    <div className="container mt-5">
      <h2>{paper.title}</h2>
      <p>{paper.abstract}</p>
    </div>
  );
}

export default ResearchPaper;
