export function normalizeTeams(teams, stages) {
  if (!teams) return [];

  const teamsMap = teams.reduce((acc, team) => {
    acc[team.id] = {
      id: team.id,
      title: team.name || team.title,
      image: team.image || "",
    };
    return acc;
  }, {});

  if (stages?.league) {
    return teams.map((team) => teamsMap[team.id]);
  }

  if (stages?.groupStage) {
    const groupTeams = Object.values(stages.groupStage)
      .flatMap((group) => group.teams.map((t) => teamsMap[t.teamId]))
      .filter(Boolean);

    const uniqueTeams = Array.from(
      new Map(groupTeams.map((t) => [t.id, t])).values()
    );

    return uniqueTeams;
  }

  return teams.map((team) => teamsMap[team.id]);
}
