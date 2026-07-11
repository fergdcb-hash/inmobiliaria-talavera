import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nombre, telefono, email, direccion } = body;

    await resend.emails.send({
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

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}