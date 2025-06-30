import { supabase } from "../supabase";

export async function getMostYellowCards() {
  const { data: most_yellow_cards, error } = await supabase
    .from("most_yellow_cards")
    .select("*");

  if (error) {
    console.error("Error fetching most_yellow_cards:", error);
    return [];
  }

  return most_yellow_cards;
}
