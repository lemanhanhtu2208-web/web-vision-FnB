import { createBrowserClient } from "@supabase/ssr";

// Dùng trong Client Component. Chỉ dùng anon key (công khai, được RLS bảo vệ).
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
