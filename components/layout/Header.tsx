import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <nav aria-label="Navegación principal">
          <ul className="nav-list">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/auth">Auth</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/wardrobe">Mi armario</Link></li>
            <li><Link href="/feed">Feed</Link></li>
            <li><Link href="/matches">Matches</Link></li>
            <li><LogoutButton /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}