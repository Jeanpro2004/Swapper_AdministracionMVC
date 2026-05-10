import GarmentForm from "@/components/garments/GarmentForm";
import { Garment } from "@/types/garment";
import { getAllStyles } from "@/models/style.model";

type EditPageProps = {
  params: Promise<{ id: string }>;
};

async function getGarment(id: string): Promise<Garment | null> {
  const response = await fetch(`http://localhost:3000/api/garments/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function EditGarmentPage({ params }: EditPageProps) {
  const { id } = await params;
  const garment = await getGarment(id);
  const { data: styles } = await getAllStyles();

  if (!garment) {
    return (
      <section className="page-section">
        <div className="container">
          <h1>Prenda no encontrada</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <h1>Editar prenda</h1>
        <GarmentForm
          initialData={garment}
          mode="edit"
          styles={styles ?? []}
        />
      </div>
    </section>
  );
}