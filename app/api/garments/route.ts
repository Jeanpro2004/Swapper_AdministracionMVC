import { NextRequest } from "next/server";
import {
  indexGarmentsController,
  storeGarmentController,
} from "@/controllers/garment.controller";

export async function GET() {
  return indexGarmentsController();
}

export async function POST(req: NextRequest) {
  return storeGarmentController(req);
}