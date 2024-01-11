import React from 'react';
import Modal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description: string;
}

export const CustomModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
}) => {
  const modalStyles = {
    content: {
      width: 'auto',
			height: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Work Modal"
      style={modalStyles}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button onClick={onClose} className="text-mainRed font-bold">
        Fermer
      </button>
    </Modal>
  );
};
