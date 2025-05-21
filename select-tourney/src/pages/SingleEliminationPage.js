import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SingleEliminationBracket, Match } from '@g-loot/react-tournament-brackets';
import { selectBracketsByTournamentId } from '../features/tournaments/tournamentsSlice';
import structuredClone from '@ungap/structured-clone'; // Add this

const SingleEliminationPage = () => {
  const { id } = useParams();
  const brackets = useSelector(selectBracketsByTournamentId(id));

  const singleElimBracket = brackets.find(b => b.type === 'single');

  if (!singleElimBracket) {
    return <div className="container mt-4">No single elimination bracket found for tournament {id}</div>;
  }

  // Deep clone the matches to avoid mutation of Redux state
  const matchesClone = structuredClone(singleElimBracket.matches);

  return (
    <div className="container mt-4">
      <h2>Single Elimination Bracket - Tournament {id}</h2>
      <SingleEliminationBracket
        matches={matchesClone}
        matchComponent={Match}
      />
    </div>
  );
};

export default SingleEliminationPage;
