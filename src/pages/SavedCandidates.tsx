
const SavedCandidates = () => {

  import React, { useState } from 'react';
import { candidates } from '../data';
import CandidateCard from './CandidateCard';
import CandidateList from './CandidateList';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [savedCandidates, setSavedCandidates] = useState([]);

    const handleSave = () => {
        setSavedCandidates([...savedCandidates, candidates[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1);
    };

    return (
        <div>
            {currentIndex < candidates.length ? (
                <CandidateCard
                    candidate={candidates[currentIndex]}
                    onSave={handleSave}
                    onNext={handleNext}
                />
            ) : (
                <p>No more candidates available.</p>
            )}
            <CandidateList candidates={savedCandidates} />
        </div>
    );
};

export default App;
  
  return (
    <>
      <h1>Potential Candidates</h1>
    </>
  );
};

export default SavedCandidates;
