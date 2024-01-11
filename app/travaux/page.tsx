'use client';

import { useState } from "react";
import { CustomModal } from "@/components/custom-modal";

interface Work {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Works() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const worksData: Work[] = [
    {
      id: 1,
      title: "Construction d'une maison moderne",
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/images/work1.jpg',
    },
    {
      id: 2,
      title: "Rénovation d'un muret",
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/images/work2.jpg',
    },
    {
      id: 3,
      title: 'Aménagement de jardin',
      description:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/images/work3.jpg',
    },
    {
      id: 4,
      title: 'Extension de maison',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: '/images/work4.jpg',
    },
    {
      id: 5,
      title: 'Réparation de façade',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imageUrl: '/images/work5.jpg',
    },
    {
      id: 6,
      title: 'Travaux de toiture',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageUrl: '/images/work6.jpg',
    },
  ];

  const openModal = (work: Work) => {
    setSelectedWork(work);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedWork(null);
    setModalIsOpen(false);
  };

  return (
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8">Nos travaux</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {worksData.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg mb-4 transition duration-300 ease-in transform hover:scale-105 cursor-pointer"
            onClick={() => openModal(work)}
          >
            <img
              src={work.imageUrl}
              alt={work.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{work.title}</h3>
              <p className="text-gray-600">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedWork && (
        <CustomModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          imageUrl={selectedWork.imageUrl}
          title={selectedWork.title}
          description={selectedWork.description}
        />
      )}
    </main>
  );
}