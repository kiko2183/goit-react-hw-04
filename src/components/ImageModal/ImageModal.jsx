import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, image }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    if (!image) return null;

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <button onClick={onClose} className={styles.closeButton}>×</button>
            <div className={styles.content}>
                <img src={image.urls.regular} alt={image.alt_description} />
                <p>{image.description || image.alt_description}</p>
                <p>Photo by {image.user.name}</p>
            </div>
        </ReactModal>
    );
};

export default ImageModal;
