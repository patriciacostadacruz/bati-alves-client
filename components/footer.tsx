import React from 'react';

export default function Footer() {
    return (
      <footer className="bg-mainRed text-white p-4 mt-auto">
        <div className="container mx-auto">
          <p className="text-lg mb-2">
            Bati-Alves - Maçonnerie, Rénovation, ...
          </p>
          <p className="text-sm">
            32, rue du Coteau, 37320 Cormery |{' '}
            <a href="tel:+33615051971">+33 6 15 05 19 71</a> |{' '}
            <a href="mailto:bati-alves@outlook.com">bati-alves@outlook.com</a>
          </p>
          <p className="text-sm mt-2">
            Suivez-nous sur{' '}
            <a
              href="https://www.facebook.com/BatiAlves"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-bold"
            >
              Facebook
            </a>
          </p>
        </div>
      </footer>
    );
};

