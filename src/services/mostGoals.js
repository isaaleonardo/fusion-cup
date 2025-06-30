import { getMostGoals } from '../lib/db/most_goals.js';

async function fetchMostGoals() {
  return await getMostGoals();
}

export async function getPlayerBestGoaler() {
  const mostGoals = await fetchMostGoals();
  return mostGoals[0];
}
