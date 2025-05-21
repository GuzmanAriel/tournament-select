const TeamList = (props) => { 
    const { teams = [], totalTeams } = props; // Ensure teams is always an array

    const total_teams = totalTeams ?? teams.length;
    const team_list = [...teams]; // Now guaranteed to be an array

    while (team_list.length < total_teams) {
        team_list.push({ team_name: "Open Slot", team_captain: "TBD" });
    }

    return (
        <div>
            <h2>Teams</h2>
            <ol>
                {team_list.map((team, index) => (
                    <li key={index}>
                        {team.team_name} - {team.team_captain}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default TeamList;
