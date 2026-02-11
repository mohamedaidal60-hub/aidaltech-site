-- 🚨 SQL POUR AIDALTECH (Sécurisé Admin) 🚨
-- Copiez TOUT ce code et exécutez-le dans Supabase > SQL Editor

-- 1. Table des Prospects (Leads)
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activation de la sécurité
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Politiques de sécurité (Qui a le droit de faire quoi ?)
-- Tout le monde peut envoyer un lead (formulaire contact)
CREATE POLICY "Anyone can insert leads" ON public.leads FOR INSERT WITH CHECK (true);

-- SEUL L'ADMIN (aidalmimo@gmail.com) peut VOIR les leads
CREATE POLICY "Admin can view leads" ON public.leads FOR SELECT 
USING ((auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');

-- SEUL L'ADMIN peut modifier/supprimer
CREATE POLICY "Admin can update leads" ON public.leads FOR UPDATE 
USING ((auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');

CREATE POLICY "Admin can delete leads" ON public.leads FOR DELETE 
USING ((auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');


-- 2. Table des Services (Pour affichage dynamique si besoin)
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Admin can insert services" ON public.services FOR INSERT WITH CHECK ((auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');
CREATE POLICY "Admin can update services" ON public.services FOR UPDATE USING ((auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');
CREATE POLICY "Admin can delete services" ON public.services FOR DELETE USING ((auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');


-- 3. Configuration du Stockage (Fichiers & Images)
INSERT INTO storage.buckets (id, name, public) VALUES ('cahiers-des-charges', 'cahiers-des-charges', false);
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Politiques de stockage
-- Cahiers des charges (Seul l'admin voit, tout le monde peut upload)
CREATE POLICY "Anyone can upload cahier des charges" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'cahiers-des-charges');
CREATE POLICY "Admin can view cahiers" ON storage.objects FOR SELECT 
USING (bucket_id = 'cahiers-des-charges' AND (auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');
CREATE POLICY "Admin can delete cahiers" ON storage.objects FOR DELETE 
USING (bucket_id = 'cahiers-des-charges' AND (auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');

-- Images (Public en lecture, Admin en écriture)
CREATE POLICY "Anyone can view images" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Admin can upload images" ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'images' AND (auth.jwt() ->> 'email') = 'aidalmimo@gmail.com');
