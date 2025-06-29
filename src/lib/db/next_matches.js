import { supabase } from "../supabase";

export async function getNextMatches() {
  const { data: next_matches, error } = await supabase
    .from("next_matches")
    .select("*");

  if (error) {
    console.error("Error fetching next_matches:", error);
    return [];
  }

  return next_matches;
}
