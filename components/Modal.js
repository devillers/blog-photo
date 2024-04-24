import React from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  const handleClickBackdrop = (e) => {
    e.stopPropagation(); // Empêche la propagation à d'autres éléments
    onClose(); // Appelle la fonction onClose pour fermer le modal
  };

  return (
    <div
      className="fixed inset-0 bg-slate-600 bg-opacity-10 flex justify-center items-center p-4 z-50"
      onClick={handleClickBackdrop} // Gère le clic sur l'arrière-plan pour fermer le modal
    >
      <div
        className="bg-white p-4 rounded-lg max-w-xl max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()} // Empêche le clic de se propager au div de fond
      >
        <Image
          src={imageSrc}
          alt="Popup Image"
          className="w-auto max-h-screen p-10 "
          layout="fill"
          objectFit="contain"
          onClick={(e) => e.stopPropagation()} // Empêche également la propagation ici
        />
      </div>
    </div>
  );
};

export default Modal;
