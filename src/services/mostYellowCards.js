import { getMostYellowCards } from '../lib/db/most_yellow_cards.js';

async function fetchMostYellowCards() {
  return await getMostYellowCards();
}

export async function getPlayerWithMostYellowCards() {
  const mostYellowCards = await fetchMostYellowCards();
  return mostYellowCards[0];
}
