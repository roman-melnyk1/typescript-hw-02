import css from './ImageGalleryItem.module.css';
import { Image } from '../types';

interface Props {
  image: Image;
  onClick: () => void;
}

export const ImageGalleryItem: React.FC<Props> = ({ image, onClick }) => {
  return (
    <li className={css.galleryItem} onClick={onClick}>
      <img src={image.webformatURL} alt={image.tags} className={css.galleryItemImage} />
    </li>
  );
};
