import "server-only";
import { createClient } from "@supabase/supabase-js";

// Service role bỏ qua RLS: CHỈ dùng ở server cho việc như cộng/trừ credit, webhook.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}
