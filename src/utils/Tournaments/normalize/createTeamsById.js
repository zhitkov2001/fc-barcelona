export function createTeamsById(teams = []) {
  return Object.fromEntries(teams.map((team) => [String(team.id), team]));
}
