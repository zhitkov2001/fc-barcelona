export function normalizeTable(season = {}) {
  if (!season) return [];

  const teams = season.teams || [];
  const stages = season.stages || {};
  const league = stages.league;
  const groupStage = stages.groupStage;

  const findTeamInfo = (teamId) =>
    teams.find((t) => t.id === teamId) || {
      id: teamId,
      title: "",
      image: "",
    };

  if (Array.isArray(league) && league.length > 0) {
    return league.map((entry, idx) => {
      const teamInfo = findTeamInfo(entry.teamId);
      return {
        id: entry.teamId,
        title: teamInfo.title,
        image: teamInfo.image,
        stats: entry.stats || {},
        position: entry.stats?.position ?? entry.position ?? idx + 1,
        isQualified: entry.isQualified,
        isDowngraded: entry.isDowngraded,
      };
    });
  }

  if (Array.isArray(groupStage) && groupStage.length > 0) {
    return groupStage.flatMap((group) =>
      (group.teams || []).map((entry, idx) => {
        const teamInfo = findTeamInfo(entry.teamId);
        return {
          id: entry.teamId,
          title: teamInfo.title,
          image: teamInfo.image,
          stats: entry.stats || {},
          position: entry.stats?.position ?? entry.position ?? idx + 1,
          groupName: group.groupName || group.name || undefined,
          isQualified: entry.isQualified,
          isDowngraded: entry.isDowngraded,
        };
      })
    );
  }

  // Если нет stages, но есть teams — просто вернём команды без stats
  if (Array.isArray(teams) && teams.length > 0) {
    return teams.map((t) => ({
      id: t.id,
      title: t.title || t.name,
      image: t.image,
      stats: {},
    }));
  }

  return [];
}
