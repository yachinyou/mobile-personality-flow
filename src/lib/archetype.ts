export type ArchetypeKey = "iceberg" | "islands" | "peaks" | "moon" | "volcano";

export const ARCHETYPE_ORDER: ArchetypeKey[] = ["iceberg", "islands", "peaks", "moon", "volcano"];

export const ARCHETYPE_NAMES: Record<ArchetypeKey, string> = {
  iceberg: "The Iceberg",
  islands: "The Islands",
  peaks: "The Peaks",
  moon: "The Moon",
  volcano: "The Volcano",
};

// Each row is a question; each entry is the archetype awarded by that option's index.
const QUESTION_ARCHETYPES: ArchetypeKey[][] = [
  ["moon", "iceberg", "islands", "volcano", "peaks"], // Q1
  ["iceberg", "islands", "peaks", "moon", "volcano"], // Q2 — tie-breaker question
  ["iceberg", "islands", "peaks", "moon", "volcano"], // Q3
  ["iceberg", "islands", "peaks", "moon", "volcano"], // Q4
  ["iceberg", "islands", "peaks", "moon", "volcano"], // Q5
];

export function computeArchetype(answers: number[]): ArchetypeKey {
  const picks = answers.map((optionIndex, questionIndex) => QUESTION_ARCHETYPES[questionIndex][optionIndex]);

  const counts = new Map<ArchetypeKey, number>();
  for (const pick of picks) counts.set(pick, (counts.get(pick) ?? 0) + 1);

  const maxCount = Math.max(...counts.values());
  const tied = ARCHETYPE_ORDER.filter((archetype) => counts.get(archetype) === maxCount);

  if (tied.length === 1) return tied[0];

  const q2Pick = picks[1];
  return tied.includes(q2Pick) ? q2Pick : tied[0];
}
