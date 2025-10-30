export function normalizeTeams(teams, stages) {
  if (!teams) return [];

  // Создадим быстрый поисковый словарь по id
  const teamsMap = teams.reduce((acc, team) => {
    acc[team.id] = {
      id: team.id,
      title: team.name || team.title,
      image: team.image || "",
    };
    return acc;
  }, {});

  // Если формат League (одна таблица)
  if (stages?.league) {
    return teams.map((team) => teamsMap[team.id]);
  }

  // Если формат GroupStage (несколько таблиц)
  if (stages?.groupStage) {
    // Берём уникальные команды из всех групп
    const groupTeams = Object.values(stages.groupStage)
      .flatMap((group) => group.teams.map((t) => teamsMap[t.teamId]))
      .filter(Boolean); // убираем undefined

    // Удаляем дубликаты
    const uniqueTeams = Array.from(
      new Map(groupTeams.map((t) => [t.id, t])).values()
    );

    return uniqueTeams;
  }

  // Если просто cup с playoff (нет групп и лиг)
  return teams.map((team) => teamsMap[team.id]);
}
