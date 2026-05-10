import GarmentForm from "@/components/garments/GarmentForm";

export default function NewGarmentPage() {
  return (
    <section className="page-section">
      <div className="container">
        <h1>Nueva prenda</h1>
        <GarmentForm mode="create" />
      </div>
    </section>
  );
}