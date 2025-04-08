import { createClient } from "@supabase/supabase-js"

// Inicializar el cliente de Supabase con las variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function GET() {
  try {
    // Obtener todas las tarifas de la tabla 'tarifas'
    const { data, error } = await supabase.from("tarifas").select("*").order("id")

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error: "Error al obtener las tarifas" }, { status: 500 })
  }
}
