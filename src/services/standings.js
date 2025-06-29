import { getGroupStandings } from "../lib/db/group_standings.js";

// Fetch the group standings from the database and filter by ID
async function fetchGroupStandings(groupId) {
  const data = await getGroupStandings();
  return data.filter(standing => standing.group_id === groupId);
}

export async function SortAndMapGroupStandings(groupId) {
  const groupStandings = await fetchGroupStandings(Number(groupId));

  return groupStandings.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points;
      }

      const aGoalDiff = a.goals_for - a.goals_against;
      const bGoalDiff = b.goals_for - b.goals_against;
      return bGoalDiff - aGoalDiff;
    })
    // Map to the desired format
    .map((group, idx) => {
      const goalDifference = group.goals_for - group.goals_against;

      return {
        position: idx + 1,
        team: group.team_name,
        matchesPlayed: group.played,
        goalDifference,
        points: group.points
      }
  });
}
