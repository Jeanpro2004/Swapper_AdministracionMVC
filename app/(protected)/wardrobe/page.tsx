import Link from "next/link";
import GarmentCard from "@/components/garments/GarmentCard";
import { Garment } from "@/types/garment";

async function getGarments(): Promise<Garment[]> {
  const response = await fetch("http://localhost:3000/api/garments", {
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  return response.json();
}

export default async function WardrobePage() {
  const garments = await getGarments();

  return (
    <section className="page-section">
      <div className="container">
        <header className="page-header">
          <h1>Mi armario</h1>
          <p>Administra tus prendas registradas.</p>
          <Link href="/wardrobe/new" className="primary-btn">
            Nueva prenda
          </Link>
        </header>

        <section className="info-section" aria-labelledby="garments-title">
          <h2 id="garments-title">Listado de prendas</h2>

          {garments.length === 0 ? (
            <p>No hay prendas registradas todavía.</p>
          ) : (
            <div className="card-grid">
              {garments.map((garment) => (
                <GarmentCard key={garment.id} garment={garment} />
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}