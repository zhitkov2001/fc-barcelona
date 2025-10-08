import TestStandingsData from "../data/tournaments/ucl.json";
import { addMatchWithStats } from "../utils/Tournaments/addMatchWithStats";
import fs from "fs";
import path from "path";

function main() {
  console.log("🚀 Скрипт добавления матча запущен!");

  const args = process.argv.slice(2);
  console.log("Полученные аргументы:", args);

  if (args.length < 4) {
    console.log(
      "❌ Использование: npm run add-match -- <ownerId> <guestId> <ownerScore> <guestScore>"
    );
    console.log("Пример: npm run add-match -- 1 2 3 1");
    return;
  }

  const [ownerId, guestId, ownerScore, guestScore] = args.map(Number);

  try {
    // Проверяем структуру перед началом
    if (!TestStandingsData.seasons?.["2025/26"]?.teams) {
      throw new Error("Неверная структура JSON файла");
    }

    console.log(
      `🎯 Добавляем матч: Команда ${ownerId} vs Команда ${guestId} ${ownerScore}:${guestScore}`
    );

    // Добавляем матч
    const updatedData = addMatchWithStats(
      TestStandingsData,
      ownerId,
      guestId,
      ownerScore,
      guestScore
    );

    // Сохраняем результат
    const filePath = path.join(__dirname, "../assets/TESTSTANDINGS.json");
    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));

    console.log("✅ Файл успешно сохранен: src/assets/TESTSTANDINGS.json");
  } catch (error) {
    console.error("❌ Критическая ошибка:", error);
  }
}

main();
