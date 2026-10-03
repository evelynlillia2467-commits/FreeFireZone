-- Pega esto COMPLETO en Supabase > SQL Editor > Run. Es seguro ejecutarlo varias veces.
-- (Si Supabase avisa de "destructive operation", confirma: solo reemplaza las reglas de este sitio.)

create table if not exists public.site_content(key text primary key, data jsonb not null default '{}'::jsonb, updated_at timestamptz default now());
alter table public.site_content enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.site_content to anon, authenticated;
grant insert, update, delete on public.site_content to authenticated;

drop policy if exists "lectura publica" on public.site_content;
drop policy if exists "admin inserta" on public.site_content;
drop policy if exists "admin actualiza" on public.site_content;
drop policy if exists "admin borra" on public.site_content;

create policy "lectura publica" on public.site_content for select to anon, authenticated using (true);
create policy "admin inserta" on public.site_content for insert to authenticated with check (lower(auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "admin actualiza" on public.site_content for update to authenticated using (lower(auth.jwt()->>'email')='soporteoficialweb@gmail.com') with check (lower(auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "admin borra" on public.site_content for delete to authenticated using (lower(auth.jwt()->>'email')='soporteoficialweb@gmail.com');

insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('media','media',true,2097152,array['image/jpeg'])
on conflict (id) do update set public=true, file_size_limit=2097152, allowed_mime_types=array['image/jpeg'];

drop policy if exists "media lectura" on storage.objects;
drop policy if exists "media admin sube" on storage.objects;
drop policy if exists "media admin actualiza" on storage.objects;
drop policy if exists "media admin borra" on storage.objects;

create policy "media lectura" on storage.objects for select using (bucket_id='media');
create policy "media admin sube" on storage.objects for insert to authenticated with check (bucket_id='media' and lower(auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "media admin actualiza" on storage.objects for update to authenticated using (bucket_id='media' and lower(auth.jwt()->>'email')='soporteoficialweb@gmail.com');
create policy "media admin borra" on storage.objects for delete to authenticated using (bucket_id='media' and lower(auth.jwt()->>'email')='soporteoficialweb@gmail.com');
