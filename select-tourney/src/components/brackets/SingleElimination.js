import React from 'react';
import { useParams } from 'react-router-dom';
import { SingleEliminationBracket } from '@g-loot/react-tournament-brackets';

const SingleEliminationPage = () => {
  const { id } = useParams();

  // placeholder/fake bracket
  const fakeMatches = [/* add your match data here */];

  return (
    <div className="container mt-4">
      <h2>Single Elimination Bracket - Tournament {id}</h2>
      <SingleEliminationBracket matches={fakeMatches} />
    </div>
  );
};

export default SingleEliminationPage;
