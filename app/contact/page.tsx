export default function Contact() {
  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">Vous avez un projet?</h2>
      <div className="flex flex-row align-center content-center gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-mainRed">
            Avis de nos clients
          </h3>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 p-4">
            <p className="text-lg mb-2">
              "Travail exceptionnel, équipe très professionnelle! Les délais ont
              été respectés et le résultat final a dépassé nos attentes."
            </p>
            <p className="text-gray-600">- Client satisfait</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 p-4">
            <p className="text-lg mb-2">
              "Super travail, délais respectés, je recommande vivement! L'équipe
              est à l'écoute et le résultat est impeccable."
            </p>
            <p className="text-gray-600">- Autre client satisfait</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 p-4">
            <p className="text-lg mb-2">
              "Expérience fantastique avec Bati-Alves! Un service professionnel
              du début à la fin. Je les recommande fortement pour tout projet de
              construction ou de rénovation."
            </p>
            <p className="text-gray-600">- Client reconnaissant</p>
          </div>
        </div>
        <div className="bg-mainRed-lightest rounded-md text-white p-4 h-[50%] w-[550px]">
          <h3 className="text-xl font-bold mb-4">Nos coordonnées</h3>
          <address className="mb-4">
            <p>32, rue du Coteau</p>
            <p>37320 Cormery</p>
          </address>
          <p className="mb-4">
            <strong>Téléphone:</strong>{' '}
            <a href="tel:+33615051971">+33 6 15 05 19 71</a>
          </p>
          <p className="mb-4">
            <strong>Email:</strong>{' '}
            <a href="mailto:bati-alves@outlook.com">bati-alves@outlook.com</a>
          </p>
          {/* Add link to FB */}
          <p className="mb-4">
            <strong>Facebook:</strong>{' '}
            <a
              href="https://www.facebook.com/batialves"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bati-Alves
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
