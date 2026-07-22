import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, telefono, email, direccion } = body;

    console.log("Datos recibidos:", body);
    console.log("API KEY existe:", !!process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: "Casayaa <info@casayaa.com>",
      to: "info@casayaa.com",
      subject: "Nueva solicitud de valoración gratuita",
      html: `
        <h2>Nueva solicitud desde la web</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
      `,
    });

    console.log("Respuesta de Resend:", result);

    return Response.json({
      success: true,
      result,
    });

  } catch (error) {
    console.error("ERROR RESEND:", error);

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}