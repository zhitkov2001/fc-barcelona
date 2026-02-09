export function normalizeTeams(rawTeams = [], teamsById = {}) {
  return rawTeams.map((team) => {
    const id = String(team.teamId || team.id);

    const dictTeam = teamsById[id];

    if (!dictTeam) {
      return {
        id,
        title: team.title ?? "Unknown",
        image: team.image ?? "default",
      };
    }

    return {
      id,
      title: dictTeam.shortTitle || dictTeam.title,
      abbr: dictTeam.abbr,
      image: dictTeam.image || "default",
    };
  });
}
