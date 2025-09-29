import { addMatchWithStats } from "./addMatchWithStats";

export function addMultipleMatches(
  jsonData: any,
  matches: Array<{
    ownerId: number;
    guestId: number;
    ownerScore: number;
    guestScore: number;
  }>
): any {
  console.log(`🚀 Начинаем добавление ${matches.length} матчей...`);

  let currentData = jsonData;

  matches.forEach((match, index) => {
    console.log(`\n--- Матч ${index + 1}/${matches.length} ---`);
    currentData = addMatchWithStats(
      currentData,
      match.ownerId,
      match.guestId,
      match.ownerScore,
      match.guestScore
    );
  });

  console.log(`\n✅ Все матчи добавлены!`);
  return currentData;
}
