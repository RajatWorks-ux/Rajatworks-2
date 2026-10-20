-- ═══════════════════════════════════════════════════════════════
--  RajatWorks Portfolio — Complete Supabase Setup SQL
--  Copy EVERYTHING below and paste into Supabase SQL Editor
--  Then click RUN (green button)
-- ═══════════════════════════════════════════════════════════════

-- ── 1. WORKS TABLE (Creative Archive / Projects page) ──────────
CREATE TABLE IF NOT EXISTS public.works (
  id              uuid NOT NULL DEFAULT gen_random_uuid(),
  title           text NOT NULL,
  description     text DEFAULT '',
  category        text NOT NULL DEFAULT 'Website',
  tech            text DEFAULT '',
  image_url       text DEFAULT '',
  mobile_image_url text DEFAULT '',
  mainimageurl    text DEFAULT '',
  gallery         jsonb DEFAULT '[]',
  link            text DEFAULT '',
  client          text DEFAULT '',
  month           text DEFAULT '',
  year            text DEFAULT '',
  services        text DEFAULT '',
  logo_full_view_url  text DEFAULT '',
  desktop_view_url    text DEFAULT '',
  phone_view_url      text DEFAULT '',
  review          text DEFAULT '',
  sort_order      integer DEFAULT 0,
  visible         boolean DEFAULT true,
  created_at      timestamp with time zone DEFAULT now(),
  updated_at      timestamp with time zone DEFAULT now(),
  CONSTRAINT works_pkey PRIMARY KEY (id)
);

-- ── 2. PROJECTS TABLE (detail pages, admin panel) ──────────────
CREATE TABLE IF NOT EXISTS public.projects (
  id              uuid NOT NULL DEFAULT gen_random_uuid(),
  title           text NOT NULL,
  description     text,
  category        text,
  tech            text,
  photo_url       text,
  link            text,
  review          text,
  num             text,
  client          text DEFAULT '',
  month           text DEFAULT '',
  year            text DEFAULT '',
  logo_full_view_url  text DEFAULT '',
  desktop_view_url    text DEFAULT '',
  phone_view_url      text DEFAULT '',
  gallery         jsonb DEFAULT '[]',
  sort_order      integer DEFAULT 0,
  visible         boolean DEFAULT true,
  created_at      timestamp with time zone DEFAULT now(),
  CONSTRAINT projects_pkey PRIMARY KEY (id)
);

-- ── 3. INQUIRIES TABLE (contact form submissions) ──────────────
CREATE TABLE IF NOT EXISTS public.inquiries (
  id          bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at  timestamp with time zone NOT NULL DEFAULT timezone('utc', now()),
  name        text NOT NULL,
  email       text NOT NULL,
  message     text NOT NULL,
  ip          text DEFAULT '',
  read        boolean DEFAULT false,
  CONSTRAINT inquiries_pkey PRIMARY KEY (id)
);

-- ── 4. REVIEWS TABLE (testimonials shown on site) ──────────────
CREATE TABLE IF NOT EXISTS public.reviews (
  id          bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at  timestamp with time zone NOT NULL DEFAULT timezone('utc', now()),
  author      text NOT NULL,
  role        text DEFAULT '',
  company     text DEFAULT '',
  content     text NOT NULL,
  rating      smallint DEFAULT 5,
  approved    boolean DEFAULT true,
  avatar      text DEFAULT '',
  CONSTRAINT reviews_pkey PRIMARY KEY (id)
);

-- ── 5. SETTINGS TABLE (social links, brand color, admin config) ─
CREATE TABLE IF NOT EXISTS public.settings (
  key     text NOT NULL,
  value   jsonb NOT NULL DEFAULT 'false',
  CONSTRAINT settings_pkey PRIMARY KEY (key)
);

-- ── 6. SUBSCRIBERS TABLE (newsletter popup) ────────────────────
CREATE TABLE IF NOT EXISTS public.subscribers (
  id          uuid NOT NULL DEFAULT gen_random_uuid(),
  email       text NOT NULL UNIQUE,
  created_at  timestamp with time zone DEFAULT now(),
  CONSTRAINT subscribers_pkey PRIMARY KEY (id)
);

-- ── 7. VISITS TABLE (analytics — page views) ───────────────────
CREATE TABLE IF NOT EXISTS public.visits (
  id          uuid NOT NULL DEFAULT gen_random_uuid(),
  page        text NOT NULL DEFAULT '/',
  referrer    text NOT NULL DEFAULT '',
  source      text NOT NULL DEFAULT '',
  useragent   text NOT NULL DEFAULT '',
  ip          text NOT NULL DEFAULT '',
  country     text NOT NULL DEFAULT '',
  city        text NOT NULL DEFAULT '',
  created_at  timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT visits_pkey PRIMARY KEY (id)
);

-- ── 8. SEARCHES TABLE (analytics — Google search queries) ──────
CREATE TABLE IF NOT EXISTS public.searches (
  id              bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at      timestamp with time zone NOT NULL DEFAULT timezone('utc', now()),
  query           text NOT NULL,
  count           bigint DEFAULT 1,
  last_searched   timestamp with time zone NOT NULL DEFAULT timezone('utc', now()),
  CONSTRAINT searches_pkey PRIMARY KEY (id)
);

-- ── 9. AD CLICKS TABLE (analytics — link click tracking) ───────
CREATE TABLE IF NOT EXISTS public.ad_clicks (
  id          bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at  timestamp with time zone NOT NULL DEFAULT timezone('utc', now()),
  label       text NOT NULL,
  url         text DEFAULT '',
  page        text DEFAULT '',
  CONSTRAINT ad_clicks_pkey PRIMARY KEY (id)
);

-- ═══════════════════════════════════════════════════════════════
--  ROW LEVEL SECURITY (RLS) — REQUIRED
--  The app uses service_role key which bypasses RLS,
--  but you still need to enable RLS so the tables are protected
--  from public Supabase anon key access.
-- ═══════════════════════════════════════════════════════════════

ALTER TABLE public.works        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.visits       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.searches     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ad_clicks    ENABLE ROW LEVEL SECURITY;

-- Allow public to read works (so the portfolio page loads without login)
CREATE POLICY "Public read works"
  ON public.works FOR SELECT
  USING (visible = true);

-- Allow public to read approved reviews
CREATE POLICY "Public read reviews"
  ON public.reviews FOR SELECT
  USING (approved = true);

-- Allow public to read projects
CREATE POLICY "Public read projects"
  ON public.projects FOR SELECT
  USING (visible = true);

-- Allow public to read settings (for social links, brand color etc)
CREATE POLICY "Public read settings"
  ON public.settings FOR SELECT
  USING (true);

-- ═══════════════════════════════════════════════════════════════
--  STORAGE BUCKET (for image uploads via admin panel)
-- ═══════════════════════════════════════════════════════════════

INSERT INTO storage.buckets (id, name, public)
VALUES ('projects', 'projects', true)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "Public Access"  ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload"   ON storage.objects;
DROP POLICY IF EXISTS "Admin Update"   ON storage.objects;
DROP POLICY IF EXISTS "Admin Delete"   ON storage.objects;

CREATE POLICY "Public Access"  ON storage.objects FOR SELECT  USING (bucket_id = 'projects');
CREATE POLICY "Admin Upload"   ON storage.objects FOR INSERT  WITH CHECK (bucket_id = 'projects');
CREATE POLICY "Admin Update"   ON storage.objects FOR UPDATE  USING (bucket_id = 'projects');
CREATE POLICY "Admin Delete"   ON storage.objects FOR DELETE  USING (bucket_id = 'projects');

-- ═══════════════════════════════════════════════════════════════
--  SEED DATA — Initial settings rows (required for admin panel)
-- ═══════════════════════════════════════════════════════════════

INSERT INTO public.settings (key, value) VALUES
  ('social_links', '{"github":"https://github.com/RajatWorks-ux","instagram":"https://www.instagram.com/rajatworks0","linkedin":"","twitter":"","youtube":"","behance":"","dribbble":"","whatsapp":""}'::jsonb),
  ('brand_color',  '"#ff6b1a"'::jsonb),
  ('contact_email', '"rajatworks1@gmail.com"'::jsonb),
  ('active_sessions', '{}'::jsonb)
ON CONFLICT (key) DO NOTHING;

-- ═══════════════════════════════════════════════════════════════
--  SAMPLE TESTIMONIALS (shows in projects page — edit via admin)
-- ═══════════════════════════════════════════════════════════════

INSERT INTO public.reviews (author, role, company, content, rating, approved) VALUES
  (
    'Arjun Mehta',
    'Founder',
    'StartupDen India',
    'Rajat built our entire landing page and admin dashboard from scratch in under 2 weeks. The quality is insane for someone working solo — it looks like an agency did it. Highly recommend.',
    5,
    true
  ),
  (
    'Priya Sharma',
    'Marketing Head',
    'LocalBiz Co.',
    'We needed a fast, mobile-first website that could actually convert visitors. Rajat delivered exactly that — clean design, smooth animations, and zero bugs on launch day.',
    5,
    true
  ),
  (
    'Vikram Singh',
    'Product Manager',
    'TechFlow Solutions',
    'The attention to detail is exceptional. Every micro-interaction, every hover state — it all just feels premium. Rajat clearly cares about the craft beyond just shipping.',
    5,
    true
  )
ON CONFLICT DO NOTHING;

-- ═══════════════════════════════════════════════════════════════
--  DONE. Your Supabase database is fully set up.
-- ═══════════════════════════════════════════════════════════════
