import React, { useEffect, useState } from "react";
import SavedCandidate from "./SavedCandidate";
import type { Candidate } from "../interfaces/Candidate.interface";

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

    const denyCandidate = (id: number) => {
        // parse candidate
        let parsedCandidates: Candidate[] = [];

        // get savedCandidates from localStorage
        const savedCandidates = JSON.parse(localStorage.getItem("savedCandidates"));

        // if type of savedCandidates is string, parse it
        if (typeof savedCandidates === "string") {
            parsedCandidates = JSON.parse(savedCandidates);
        }

        // filter parsed savedCandidates to remove candidate with id
        parsedCandidates = parsedCandidates.filter((candidate) => candidate.id !== id);

        // set savedCandidates in localStorage
        localStorage.setItem("savedCandidates", JSON.stringify(parsedCandidates));

        // call setPotentialCandidates with filtered savedCandidates
        setPotentialCandidates(parsedCandidates);
    }

    return (
        <>
            <table className="table-list">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Bio</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {potentialCandidates.map((candidate) => (
                        <SavedCandidate key={candidate.id} candidate={candidate} denyCandidate={denyCandidate} />
                    ))}
                </tbody>
            </table>
        </>
    );
}
