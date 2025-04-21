import { useEffect } from 'react';
import css from './Modal.module.css';

interface ModalProps {
  largeImageURL: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="Enlarged" className={css.image} />
      </div>
    </div>
  );
};
