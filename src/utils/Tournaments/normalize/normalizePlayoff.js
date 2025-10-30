export function normalizePlayoff(stages) {
  if (!stages) return [];

  if (stages.league && stages.playoff) {
    return stages.playoff.rounds || [];
  }

  if (stages.groupStage && stages.playoff) {
    return stages.playoff.rounds || [];
  }

  if (stages.playoff && (!stages.league || !stages.groupStage)) {
    return stages.playoff.rounds || [];
  }

  return [];
}
