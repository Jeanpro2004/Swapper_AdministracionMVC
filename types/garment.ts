export type Garment = {
  id: string;
  owner_id?: string | null;
  title: string;
  description?: string | null;
  size: string;
  brand?: string | null;
  condition: string;
  created_at?: string;
  updated_at?: string;
};

export type GarmentPayload = {
  title: string;
  description?: string;
  size: string;
  brand?: string;
  condition: string;
};