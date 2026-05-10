"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Garment } from "@/types/garment";

type GarmentFormProps = {
  initialData?: Garment;
  mode?: "create" | "edit";
};

export default function GarmentForm({
  initialData,
  mode = "create",
}: GarmentFormProps) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    size: initialData?.size || "",
    brand: initialData?.brand || "",
    condition: initialData?.condition || "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const endpoint =
      mode === "create"
        ? "/api/garments"
        : `/api/garments/${initialData?.id}`;

    const method = mode === "create" ? "POST" : "PUT";

    const response = await fetch(endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!response.ok) {
      const errorData = await response.json();
      alert(errorData.error || "Ocurrió un error");
      return;
    }

    router.push("/wardrobe");
    router.refresh();
  }

  return (
    <form className="garment-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          {mode === "create" ? "Registrar prenda" : "Editar prenda"}
        </legend>

        <div className="form-group">
          <label htmlFor="title">Nombre</label>
          <input
            id="title"
            type="text"
            placeholder="Chaqueta denim"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            rows={4}
            placeholder="Describe la prenda"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">Talla</label>
          <input
            id="size"
            type="text"
            placeholder="M"
            value={form.size}
            onChange={(e) => setForm({ ...form, size: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="brand">Marca</label>
          <input
            id="brand"
            type="text"
            placeholder="Zara"
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Estado</label>
          <select
            id="condition"
            value={form.condition}
            onChange={(e) =>
              setForm({ ...form, condition: e.target.value })
            }
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="new">Nuevo</option>
            <option value="almost_new">Casi nuevo</option>
            <option value="used">Usado</option>
          </select>
        </div>

        <button type="submit" className="primary-btn" disabled={loading}>
          {loading
            ? "Guardando..."
            : mode === "create"
            ? "Guardar"
            : "Actualizar"}
        </button>
      </fieldset>
    </form>
  );
}