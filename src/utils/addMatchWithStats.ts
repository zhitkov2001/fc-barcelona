export function addMatchWithStats(
  jsonData: any,
  ownerId: number,
  guestId: number,
  ownerScore: number,
  guestScore: number
): any {
  try {
    console.log("🎯 Начинаем добавление матча...");

    // 1. Проверяем входные данные
    if (
      !jsonData ||
      !jsonData.ucl ||
      !jsonData.ucl.seasons ||
      !jsonData.ucl.seasons["2025/26"]
    ) {
      throw new Error("Неверная структура JSON данных");
    }

    // 2. Создаем глубокую копию всех данных
    const newData = JSON.parse(JSON.stringify(jsonData));
    const currentSeason = newData.ucl.seasons["2025/26"];

    // 3. Проверяем существование команд
    const ownerTeam = currentSeason.teams.find(
      (team: any) => team.id === ownerId
    );
    const guestTeam = currentSeason.teams.find(
      (team: any) => team.id === guestId
    );

    if (!ownerTeam) {
      throw new Error(`Команда с ID ${ownerId} не найдена`);
    }
    if (!guestTeam) {
      throw new Error(`Команда с ID ${guestId} не найдена`);
    }

    // 4. Добавляем матч в groupStage
    const currentMatches = currentSeason.groupStage || [];
    const nextId =
      currentMatches.length > 0
        ? Math.max(...currentMatches.map((m: any) => m.id)) + 1
        : 1;

    const newMatch = {
      id: nextId,
      owner: { id: ownerId, score: ownerScore },
      guest: { id: guestId, score: guestScore },
    };

    currentSeason.groupStage = [...currentMatches, newMatch];

    // 5. Обновляем статистику команд
    updateTeamsStats(currentSeason.teams, newMatch);

    // 6. Обновляем позиции и квалификацию
    updateTeamsPositionsAndQualification(currentSeason.teams);

    // 7. Обновляем timestamp
    currentSeason.updatedAt = new Date()
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(",", "");

    console.log(
      `✅ Матч ${nextId} добавлен: ${ownerTeam.title} vs ${guestTeam.title} ${ownerScore}:${guestScore}`
    );
    console.log(`📊 Статистика обновлена для обеих команд`);

    return newData;
  } catch (error) {
    console.error("❌ Ошибка при добавлении матча:", error);
    // В случае ошибки возвращаем исходные данные без изменений
    return jsonData;
  }
}

function updateTeamsStats(teams: any[], match: any) {
  const ownerTeam = teams.find((team) => team.id === match.owner.id);
  const guestTeam = teams.find((team) => team.id === match.guest.id);

  if (!ownerTeam || !guestTeam) return;

  // Обновляем основную статистику
  ownerTeam.scored += match.owner.score;
  guestTeam.scored += match.guest.score;
  ownerTeam.missed += match.guest.score;
  guestTeam.missed += match.owner.score;

  // Обновляем победы/ничьи/поражения
  if (match.owner.score > match.guest.score) {
    ownerTeam.wins += 1;
    guestTeam.losses += 1;
  } else if (match.owner.score < match.guest.score) {
    ownerTeam.losses += 1;
    guestTeam.wins += 1;
  } else {
    ownerTeam.draws += 1;
    guestTeam.draws += 1;
  }

  // Обновляем дополнительную статистику если поля существуют
  if (guestTeam.awayGoals !== undefined) {
    guestTeam.awayGoals += match.guest.score;
  }
  if (ownerTeam.homeGoals !== undefined) {
    ownerTeam.homeGoals += match.owner.score;
  }
  if (
    match.guest.score > match.owner.score &&
    guestTeam.awayWins !== undefined
  ) {
    guestTeam.awayWins += 1;
  }
}

function updateTeamsPositionsAndQualification(teams: any[]) {
  // Сортируем команды по нескольким критериям
  const sortedTeams = [...teams].sort((a, b) => {
    // 1. По очкам (3 за победу, 1 за ничью)
    const pointsA = a.wins * 3 + a.draws;
    const pointsB = b.wins * 3 + b.draws;
    if (pointsA !== pointsB) return pointsB - pointsA;

    // 2. По разнице голов
    const diffA = a.scored - a.missed;
    const diffB = b.scored - b.missed;
    if (diffA !== diffB) return diffB - diffA;

    // 3. По забитым голам
    if (a.scored !== b.scored) return b.scored - a.scored;

    // 4. По алфавиту (если все остальное одинаково)
    return a.title.localeCompare(b.title);
  });

  // Обновляем позиции и квалификацию
  sortedTeams.forEach((team, index) => {
    const position = index + 1;
    team.position = position;

    // Устанавливаем квалификацию по правилам
    if (position >= 1 && position <= 8) {
      team.isQualified = "green";
    } else if (position >= 9 && position <= 24) {
      team.isQualified = "orange";
    } else {
      team.isQualified = undefined;
    }
  });
}

export function recalculateAllStats(jsonData: any): any {
  try {
    console.log("🔄 Пересчитываем всю статистику...");

    if (!jsonData?.ucl?.seasons?.["2025/26"]) {
      throw new Error("Неверная структура JSON данных");
    }

    const newData = JSON.parse(JSON.stringify(jsonData));
    const currentSeason = newData.ucl.seasons["2025/26"];

    // Обнуляем статистику всех команд
    currentSeason.teams.forEach((team: any) => {
      team.wins = 0;
      team.draws = 0;
      team.losses = 0;
      team.scored = 0;
      team.missed = 0;
      team.position = 0;
      if (team.awayGoals !== undefined) team.awayGoals = 0;
      if (team.homeGoals !== undefined) team.homeGoals = 0;
      if (team.awayWins !== undefined) team.awayWins = 0;
    });

    // Пересчитываем по всем матчам
    currentSeason.groupStage.forEach((match: any) => {
      updateTeamsStats(currentSeason.teams, match);
    });

    // Обновляем позиции
    updateTeamsPositionsAndQualification(currentSeason.teams);

    // Обновляем timestamp
    currentSeason.updatedAt = new Date()
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(",", "");

    console.log("✅ Вся статистика пересчитана");
    return newData;
  } catch (error) {
    console.error("❌ Ошибка при пересчете статистики:", error);
    return jsonData;
  }
}
