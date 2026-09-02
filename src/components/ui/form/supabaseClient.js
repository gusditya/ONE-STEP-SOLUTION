import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://igxmzcjfuweldqilfzrw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Dn3zYb6l8_tAgvBTvEh-wA_1TRej9hC";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
