import { getNextMatches } from '../lib/db/next_matches';

async function fetchNextMatches() {
  return await getNextMatches();
}

export async function getNextMatch() {
  const nextMatches = await fetchNextMatches();
  const nextMatch = nextMatches[0]

  return {
   team1: nextMatch.team1_name,
   team2: nextMatch.team2_name,
   date: nextMatch.date
  }
}
