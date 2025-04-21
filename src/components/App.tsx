import { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../services/api';
import { Image } from './types';
import { Loader } from './Loader/Loader';
import { LoadMoreButton } from './LoadMoreBtn/Button';
import { Modal } from './ImageModal/Modal';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages(prev => [...prev, ...data]);
      } catch {
        setError('Failed to fetch images');
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setImages([]);
      setPage(1);
    }
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreButton onClick={handleLoadMore} />}
      {selectedImage && <Modal largeImageURL={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
