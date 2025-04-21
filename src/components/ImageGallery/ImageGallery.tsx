import { ImageGalleryItem } from '../ImageCard/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Image } from '../types';

interface Props {
  images: Image[];
  onImageClick: (url: string) => void;
}

export const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(image.largeImageURL)}
        />
      ))}
    </ul>
  );
};
