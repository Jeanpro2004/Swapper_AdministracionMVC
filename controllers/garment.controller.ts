import { NextRequest, NextResponse } from "next/server";
import {
  createGarment,
  deleteGarment,
  getAllGarments,
  getGarmentById,
  updateGarment,
} from "@/models/garment.model";
import { validateGarmentPayload } from "@/lib/validations/garment.validation";
import { getStyleById } from "@/models/style.model";

export async function indexGarmentsController() {
  const { data, error } = await getAllGarments();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function showGarmentController(id: string) {
  const { data, error } = await getGarmentById(id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json(data, { status: 200 });
}

async function validateStyleExists(styleId: string) {
  const { data: style, error } = await getStyleById(styleId);

  if (error || !style) {
    return false;
  }

  return true;
}

export async function storeGarmentController(req: NextRequest) {
  const body = await req.json();

  const validationError = validateGarmentPayload(body);

  if (validationError) {
    return NextResponse.json(
      { error: validationError },
      { status: 400 }
    );
  }

  const styleExists = await validateStyleExists(body.style_id);

  if (!styleExists) {
    return NextResponse.json(
      { error: "El estilo seleccionado no existe en la base de datos." },
      { status: 400 }
    );
  }

  const { data, error } = await createGarment({
    title: body.title,
    description: body.description,
    size: body.size,
    brand: body.brand,
    condition: body.condition,
    style_id: body.style_id,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function updateGarmentController(
  req: NextRequest,
  id: string
) {
  const body = await req.json();

  const validationError = validateGarmentPayload(body);

  if (validationError) {
    return NextResponse.json(
      { error: validationError },
      { status: 400 }
    );
  }

  const styleExists = await validateStyleExists(body.style_id);

  if (!styleExists) {
    return NextResponse.json(
      { error: "El estilo seleccionado no existe en la base de datos." },
      { status: 400 }
    );
  }

  const { data, error } = await updateGarment(id, {
    title: body.title,
    description: body.description,
    size: body.size,
    brand: body.brand,
    condition: body.condition,
    style_id: body.style_id,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function destroyGarmentController(id: string) {
  const { error } = await deleteGarment(id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json(
    { message: "Garment deleted successfully" },
    { status: 200 }
  );
}