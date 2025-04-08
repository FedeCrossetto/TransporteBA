import { createClient } from "@supabase/supabase-js"

// Inicializar el cliente de Supabase con las variables de entorno
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const reserva = await request.json()

    // Insertar la nueva reserva en la tabla 'clientes'
    const { data, error } = await supabase
      .from("clientes")
      .insert([
        {
          nombre: reserva.nombre,
          telefono: reserva.telefono,
          destino: reserva.destino,
          fecha: reserva.fecha,
          hora: reserva.hora,
          mensaje: reserva.mensaje || "",
        },
      ])
      .select()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: "Error al procesar la reserva" }, { status: 500 })
  }
}
