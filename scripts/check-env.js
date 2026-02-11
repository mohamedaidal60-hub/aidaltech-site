
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error("ERREUR CRITIQUE : Les variables d'environnement Supabase ne sont PAS configurées.")
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

console.log("Configuration Supabase OK !")
console.log("URL:", supabaseUrl)
console.log("KEY: [HIDDEN]")
