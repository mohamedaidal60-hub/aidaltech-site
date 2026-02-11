
-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM auth.users
    WHERE id = auth.uid()
    AND email = 'aidalmimo@gmail.com'
  );
$$;

-- Leads table
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

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin can view leads" ON public.leads FOR SELECT USING (public.is_admin());
CREATE POLICY "Admin can update leads" ON public.leads FOR UPDATE USING (public.is_admin());
CREATE POLICY "Admin can delete leads" ON public.leads FOR DELETE USING (public.is_admin());

-- Articles table
CREATE TABLE public.articles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  image_url TEXT,
  category TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published articles" ON public.articles FOR SELECT USING (true);
CREATE POLICY "Admin can insert articles" ON public.articles FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admin can update articles" ON public.articles FOR UPDATE USING (public.is_admin());
CREATE POLICY "Admin can delete articles" ON public.articles FOR DELETE USING (public.is_admin());

-- Services table
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
CREATE POLICY "Admin can insert services" ON public.services FOR INSERT WITH CHECK (public.is_admin());
CREATE POLICY "Admin can update services" ON public.services FOR UPDATE USING (public.is_admin());
CREATE POLICY "Admin can delete services" ON public.services FOR DELETE USING (public.is_admin());

-- Storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES ('cahiers-des-charges', 'cahiers-des-charges', false);
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Storage policies for cahiers-des-charges (anyone can upload, admin can read)
CREATE POLICY "Anyone can upload cahier des charges" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'cahiers-des-charges');
CREATE POLICY "Admin can view cahiers" ON storage.objects FOR SELECT USING (bucket_id = 'cahiers-des-charges' AND public.is_admin());
CREATE POLICY "Admin can delete cahiers" ON storage.objects FOR DELETE USING (bucket_id = 'cahiers-des-charges' AND public.is_admin());

-- Storage policies for images (public read, admin write)
CREATE POLICY "Anyone can view images" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Admin can upload images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND public.is_admin());
CREATE POLICY "Admin can delete images" ON storage.objects FOR DELETE USING (bucket_id = 'images' AND public.is_admin());

-- Trigger for updated_at on articles
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_articles_updated_at
BEFORE UPDATE ON public.articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
