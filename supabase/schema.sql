-- RENOSYSTEM ALL-IN-ONE — Supabase Schema
-- Empfehlung: Projekt-Region auf eu-central-1 (Frankfurt) setzen, um die
-- DSGVO-Anforderungen aus der Datenschutzerklärung einzuhalten.

create extension if not exists "pgcrypto";

-- Leads aus dem Kontaktformular
create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  project_type text not null check (project_type in ('komplettsanierung', 'einzelleistung', 'sonstiges')),
  name text not null,
  phone text,
  email text,
  message text,
  preferred_contact text not null check (preferred_contact in ('telefon', 'whatsapp', 'email')),
  source text not null default 'website'
);

alter table leads enable row level security;

-- Anonyme Website-Besucher dürfen ausschließlich neue Leads anlegen,
-- niemals lesen, ändern oder löschen.
create policy "Public can insert leads"
  on leads for insert
  to anon
  with check (true);

-- Projekte / Referenzen für die Portfolio-Galerie.
-- is_placeholder = true kennzeichnet Platzhalterbilder, die vor dem Livegang
-- durch echte Projektfotos ersetzt werden sollen.
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  category text,
  before_image_url text not null,
  after_image_url text not null,
  alt_text text not null,
  is_placeholder boolean not null default true,
  sort_order int not null default 0
);

alter table projects enable row level security;

create policy "Public can read projects"
  on projects for select
  to anon
  using (true);

create index if not exists projects_sort_order_idx on projects (sort_order);
