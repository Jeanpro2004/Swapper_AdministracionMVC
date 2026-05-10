import { createClient } from "@/lib/supabase/server";
import { GarmentPayload } from "@/types/garment";

export async function getAllGarments() {
  const supabase = createClient();

  return supabase
    .from("garments")
    .select("*")
    .order("created_at", { ascending: false });
}

export async function getGarmentById(id: string) {
  const supabase = createClient();

  return supabase
    .from("garments")
    .select("*")
    .eq("id", id)
    .single();
}

export async function createGarment(data: GarmentPayload) {
  const supabase = createClient();

  return supabase
    .from("garments")
    .insert({
      title: data.title,
      description: data.description || null,
      size: data.size,
      brand: data.brand || null,
      condition: data.condition,
    })
    .select()
    .single();
}

export async function updateGarment(id: string, data: GarmentPayload) {
  const supabase = createClient();

  return supabase
    .from("garments")
    .update({
      title: data.title,
      description: data.description || null,
      size: data.size,
      brand: data.brand || null,
      condition: data.condition,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();
}

export async function deleteGarment(id: string) {
  const supabase = createClient();

  return supabase
    .from("garments")
    .delete()
    .eq("id", id);
}