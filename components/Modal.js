import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-slate-600 bg-opacity-10 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded-lg max-w-xl max-h-full overflow-auto">
        <img
          src={imageSrc}
          alt="Popup Image"
          onClick={(e) => e.stopPropagation()}
          className="w-auto max-h-screen"
        />
      </div>
    </div>
  );
};

export default Modal;
