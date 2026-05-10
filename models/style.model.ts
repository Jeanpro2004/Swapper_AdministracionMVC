import { createClient } from "@/lib/supabase/server";

export async function getAllStyles() {
  const supabase = await createClient();

  return supabase
    .from("styles")
    .select("*")
    .order("name", { ascending: true });
}