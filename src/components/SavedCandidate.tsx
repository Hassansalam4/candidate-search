import type { Candidate } from '../interfaces/Candidate.interface';

type SavedCandidateProps = {
    candidate: Candidate;
    denyCandidate: (id: number) => void;
};

const SavedCandidate = ({ candidate, denyCandidate }: SavedCandidateProps) => {
    return (
        <tr>
            <td>
                <img
                    src={candidate.avatar_url}
                    alt={candidate.login}
                    style={{ width: 50, height: 50 }}
                />
            </td>
            <td>{candidate.name}</td>
            <td>{candidate.company}</td>
            <td>{candidate.location}</td>
            <td>{candidate.bio}</td>
            <td>
                <button onClick={() => denyCandidate(candidate.id)}>Deny</button>
            </td>
        </tr>
    );
}


export default SavedCandidate;