-- Pega esto completo en Supabase > SQL Editor > Run
create table if not exists public.site_content(key text primary key, data jsonb not null default '{}'::jsonb, updated_at timestamptz default now());
alter table public.site_content enable row level security;
create policy "lectura publica" on public.site_content for select to anon, authenticated using (true);
create policy "admin inserta" on public.site_content for insert to authenticated with check ((auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "admin actualiza" on public.site_content for update to authenticated using ((auth.jwt()->>'email')='soporteoficialweb@gmail.com') with check ((auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "admin borra" on public.site_content for delete to authenticated using ((auth.jwt()->>'email')='soporteoficialweb@gmail.com');
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('media','media',true,2097152,array['image/jpeg']) on conflict (id) do nothing;
create policy "media lectura" on storage.objects for select using (bucket_id='media');
create policy "media admin sube" on storage.objects for insert to authenticated with check (bucket_id='media' and (auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "media admin actualiza" on storage.objects for update to authenticated using (bucket_id='media' and (auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "media admin borra" on storage.objects for delete to authenticated using (bucket_id='media' and (auth.jwt()->>'email')='soporteoficialweb@gmail.com');
