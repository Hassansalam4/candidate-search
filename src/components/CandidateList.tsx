import React, { useEffect, useState } from "react";
import SavedCandidate from "./SavedCandidate";
import CandidateList from "./CandidateList";
import { Candidate } from "../interfaces/Candidate.interface";

export default function SavedCandidatesPage() {
    const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        // Fetch saved candidates from localStorage or API
        const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates")) || [];
        let candidates: Candidate[] = [];
        if (typeof savedCandidates === "string") {
            candidates = JSON.parse(savedCandidates);
        }
        setPotentialCandidates(candidates);
    }, []);

    denyCandidate = (id: number) => { 
        // parse candidate
        // get savedCandidates from localStorage
        // if type of savedCandidates is string, parse it
        // filter parsed savedCandidates to remove candidate with id
        // set savedCandidates in localStorage
        // call setPotentialCandidates with filtered savedCandidates
    }

    return (
        <>
    <CandidateList candidates={potentialCandidates} />;
    </>
    );
}
