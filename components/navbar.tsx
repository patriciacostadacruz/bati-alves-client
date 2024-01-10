import Link from "next/link";

export default function Navbar() {
	return (
    <div>
      <ul>
        <Link href="/">Accueil</Link>
        <Link href="/travaux">Travaux</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
}