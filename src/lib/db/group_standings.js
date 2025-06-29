import { supabase } from "../supabase";

export async function getGroupStandings() {
  const { data: groupStandings, error } = await supabase
    .from("group_standings")
    .select("*");

  if (error) {
    console.error("Error fetching group_standings", error);
    return [];
  }

  return groupStandings;
}
