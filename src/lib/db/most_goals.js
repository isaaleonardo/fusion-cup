import { supabase } from "../supabase";

export async function getMostGoals() {
  const { data: most_goals, error } = await supabase
    .from("most_goals")
    .select("*");

  if (error) {
    console.error("Error fetching most_goals:", error);
    return [];
  }

  return most_goals;
}
