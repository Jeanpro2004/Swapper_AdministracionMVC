import { NextRequest, NextResponse } from "next/server";
import {
  createGarment,
  deleteGarment,
  getAllGarments,
  getGarmentById,
  updateGarment,
} from "@/models/garment.model";

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

export async function storeGarmentController(req: NextRequest) {
  const body = await req.json();

  const { title, description, size, brand, condition } = body;

  if (!title || !size || !condition) {
    return NextResponse.json(
      { error: "Title, size and condition are required" },
      { status: 422 }
    );
  }

  const { data, error } = await createGarment({
    title,
    description,
    size,
    brand,
    condition,
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

  const { title, description, size, brand, condition } = body;

  if (!title || !size || !condition) {
    return NextResponse.json(
      { error: "Title, size and condition are required" },
      { status: 422 }
    );
  }

  const { data, error } = await updateGarment(id, {
    title,
    description,
    size,
    brand,
    condition,
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