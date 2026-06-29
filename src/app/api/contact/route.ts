import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const nombre = String(body?.nombre ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const mensaje = String(body?.mensaje ?? "").trim();
    const telefono = body?.telefono ? String(body.telefono).trim() : null;
    const servicio = body?.servicio ? String(body.servicio).trim() : null;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Email inválido." },
        { status: 400 }
      );
    }

    const lead = await db.lead.create({
      data: { nombre, email, mensaje, telefono, servicio },
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error("[api/contact] error:", err);
    return NextResponse.json(
      { ok: false, error: "No se pudo guardar el mensaje." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "ADNQN · Agencia Digital Neuquina — API de contacto activa.",
  });
}
