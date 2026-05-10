drop table if exists public.garments cascade;

create table public.garments (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid null,
  title text not null,
  description text,
  size text not null,
  brand text,
  condition text not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.garments disable row level security;
