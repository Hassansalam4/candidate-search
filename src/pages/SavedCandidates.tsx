import React, { useState } from 'react';

import CandidateCard from '../components/CandidateCard';
import CandidateList from '../components/CandidateList';


const SavedCandidates = () => {

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


export default SavedCandidates;
