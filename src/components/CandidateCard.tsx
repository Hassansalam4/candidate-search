import type { Candidate } from '../interfaces/Candidate.interface';

type CandidateCardProps = {
    currentUser: Candidate;
    makeDecision: (isSelected: boolean) => void;
}

export default function CandidateCard({ currentUser, makeDecision }: CandidateCardProps) {
    return (
        <div>
            {currentUser?.login ? (
                <>
                    {currentUser?.avatar_url ? (
                        <img
                            src={currentUser.avatar_url}
                            alt={currentUser.login}
                            style={{ width: 100, height: 100 }}
                        />
                    ) : (
                        <img src={'placehold.co/100x100'} alt="placeholder" />
                    )}
                    <div
                        style={{
                            backgroundColor: '#fff',
                            padding: 10,
                            width: 300,
                        }}
                    >
                        {currentUser?.html_url && currentUser?.login ? (
                            <a
                                href={currentUser.html_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <h2
                                    style={{ padding: 0, margin: 0, color: '#000' }}
                                >
                                    {currentUser.name}
                                </h2>
                            </a>
                        ) : null}
                        {currentUser?.location ? (
                            <p>{currentUser.location}</p> // Fixed the typo "locaton" to "location"
                        ) : null}
                        {currentUser?.email ? (
                            <p>
                                <a href={`mailto:${currentUser.email}`}>{currentUser.email}</a>
                            </p>
                        ) : null}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 20,
                    }}>
                        <button onClick={() => makeDecision(true)}>Save</button>
                        <button onClick={() => makeDecision(false)}>Reject</button>
                    </div>
                </>
            ) : (
                <p>No more candidates available.</p>
            )}
        </div>
    );
}
