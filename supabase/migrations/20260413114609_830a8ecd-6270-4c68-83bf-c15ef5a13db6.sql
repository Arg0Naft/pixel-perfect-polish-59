
-- Role enum and user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS for user_roles
CREATE POLICY "Users can view own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- site_content: key-value text storage for section titles/descriptions
CREATE TABLE public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site_content"
  ON public.site_content FOR SELECT USING (true);
CREATE POLICY "Admins can insert site_content"
  ON public.site_content FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update site_content"
  ON public.site_content FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete site_content"
  ON public.site_content FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- content_cards: cards for various sections
CREATE TABLE public.content_cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT '',
  sort_order INT NOT NULL DEFAULT 0,
  extra_data JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.content_cards ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read content_cards"
  ON public.content_cards FOR SELECT USING (true);
CREATE POLICY "Admins can insert content_cards"
  ON public.content_cards FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update content_cards"
  ON public.content_cards FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete content_cards"
  ON public.content_cards FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- faq_items
CREATE TABLE public.faq_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.faq_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read faq_items"
  ON public.faq_items FOR SELECT USING (true);
CREATE POLICY "Admins can insert faq_items"
  ON public.faq_items FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update faq_items"
  ON public.faq_items FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete faq_items"
  ON public.faq_items FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_site_content_updated_at
  BEFORE UPDATE ON public.site_content
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_cards_updated_at
  BEFORE UPDATE ON public.content_cards
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_faq_items_updated_at
  BEFORE UPDATE ON public.faq_items
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_content_cards_section ON public.content_cards(section);
CREATE INDEX idx_content_cards_sort ON public.content_cards(section, sort_order);
