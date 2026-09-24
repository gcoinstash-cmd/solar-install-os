# HELIOS SOLAR INSTALL & PERMIT OS — Supabase 3-Minute Setup Guide

Welcome to **Helios Solar Install & Permit OS** (Product #59) in the **Home Services & Commercial Contracting Vertical Vault**.

## Quick Start (3 Steps)

### 1. Create a Supabase Project
1. Log in to [Supabase](https://supabase.com).
2. Click **New Project** and name it `helios-solar-os`.
3. Set your database password and choose your primary region.

### 2. Execute SQL Schemas
1. Navigate to the **SQL Editor** in your Supabase Dashboard sidebar.
2. Open `supabase/schema.sql` from this package, paste it into the editor, and click **Run**.
3. Open `supabase/seed.sql` from this package, paste it into the editor, and click **Run**.

### 3. Connect Environment Variables
Copy `.env.example` to `.env`:
```bash
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. Admin Demo Credentials
- Route: `/admin`
- Passkey: `solar2026`
- Bypass: 1-click **[ SOLAR PASS ]** button automatically injects credentials for instant client demo walkthroughs.
