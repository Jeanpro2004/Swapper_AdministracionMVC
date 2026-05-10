"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Garment } from "@/types/garment";

type GarmentCardProps = {
  garment: Garment;
};

export default function GarmentCard({ garment }: GarmentCardProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "¿Seguro que deseas eliminar esta prenda?"
    );

    if (!confirmed) return;

    const response = await fetch(`/api/garments/${garment.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.error || "No se pudo eliminar");
      return;
    }

    router.refresh();
  }

  return (
    <article className="info-card">
      <h3>{garment.title}</h3>
      <p>{garment.description || "Sin descripción"}</p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        <li><strong>Talla:</strong> {garment.size}</li>
        <li><strong>Marca:</strong> {garment.brand || "No especificada"}</li>
        <li><strong>Estado:</strong> {garment.condition}</li>
      </ul>

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        <Link className="primary-btn" href={`/wardrobe/${garment.id}/edit`}>
          Editar
        </Link>

        <button type="button" className="text-btn" onClick={handleDelete}>
          Eliminar
        </button>
      </div>
    </article>
  );
}