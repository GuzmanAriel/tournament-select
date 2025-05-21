import { Table } from 'reactstrap';

const PoolTeamList = ({ teams }) => {
    // Sort by wins descending, then by losses ascending as a tiebreaker
    const sortedTeams = [...teams].sort((a, b) => {
        if (b.wins === a.wins) {
            return a.losses - b.losses;
        }
        return b.wins - a.wins;
    });

    return (
        <div>
            <h3>Standings</h3>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Place</th>
                        <th>Team Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Sets Won</th>
                        <th>Sets Lost</th>
                        <th>Points For</th>
                        <th>Points Against</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedTeams.map((team, index) => (
                        <tr key={team.team_name}>
                            <th scope="row">{index + 1}</th>
                            <td>{team.team_name}</td>
                            <td>{team.wins}</td>
                            <td>{team.losses}</td>
                            <td>{team.sets_won}</td>
                            <td>{team.sets_lost}</td>
                            <td>{team.points_scored}</td>
                            <td>{team.points_allowed}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default PoolTeamList;
