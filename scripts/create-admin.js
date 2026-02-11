
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function createAdmin() {
  const { data, error } = await supabase.auth.signUp({
    email: 'aidalmimo@gmail.com',
    password: '@sba-Trs2026',
    options: {
      data: {
        full_name: 'Admin AidalDev',
      },
    },
  })

  if (error) {
    console.error('Erreur lors de la création du compte :', error.message)
  } else {
    console.log('Compte créé avec succès ! CHECK VOS EMAILS pour confirmer l\'inscription.')
    console.log('User ID:', data.user?.id)
  }
}

createAdmin()
