import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="hero-section relative mb-8">
        {/* replace the src with a high-quality image */}
        <img
          src="/images/hero-image.jpg"
          alt="Construction and Renovation"
          className="w-full h-64 object-cover rounded-md shadow-lg transition duration-300 hover:shadow-xl"
        />
        <div className="overlay absolute inset-0 bg-mainRed opacity-60"></div>
        <div className="text-white absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-2">Bienvenue chez Bati-Alves</h1>
          <p className="text-lg text-center w-[50%]">
            Mettons en lumière l'harmonie entre tradition et modernité. Explorez
            nos réalisations uniques et contactez-nous pour donner vie à votre
            projet de rêve.
          </p>
        </div>
      </div>
      <p className="text-center m-8 text-[26px]">
        Qui sommes-nous et que faisons-nous?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto place-items-center">
        <Link href="/travaux">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 transition duration-300 hover:shadow-2xl cursor-pointer">
            <img
              src="/images/modern-house.jpg"
              alt="Modern House"
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Construction moderne</h3>
              <p className="text-gray-600">
                Découvrez nos réalisations contemporaines qui allient style et
                fonctionnalité.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/travaux">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 transition duration-300 hover:shadow-2xl cursor-pointer">
            <img
              src="/images/renovation.jpg"
              alt="Rénovation"
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Rénovation sur mesure</h3>
              <p className="text-gray-600">
                Transformez votre espace avec nos services de rénovation
                personnalisés.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/contact">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 transition duration-300 hover:shadow-2xl cursor-pointer">
            <img
              src="/images/family-team.jpg"
              alt="Équipe familiale"
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Équipe dévouée</h3>
              <p className="text-gray-600">
                Notre équipe familiale s'engage à fournir un travail de qualité
                pour chaque projet.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
