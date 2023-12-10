import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://zhrqxqzshshkfrhresls.supabase.co'
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const client = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
