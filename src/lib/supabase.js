import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qyaktbkahhxuitljvvmx.supabase.co'
const supabaseKey = import.meta.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
