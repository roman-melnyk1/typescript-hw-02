import axios from 'axios';
import { Image } from '../components/types';

const API_KEY = 'WVvGIZk3Eq8MwB8PxEcJMpwSm5l3JvLgy7nV9tm_bZU';
const BASE_URL = 'https://api.unsplash.com';

interface UnsplashResponse {
  results: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }[];
}

export const fetchImages = async (query: string, page: number): Promise<Image[]> => {
  const response = await axios.get<UnsplashResponse>(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return response.data.results.map(hit => ({
    id: hit.id,
    webformatURL: hit.urls.small,
    largeImageURL: hit.urls.regular,
    tags: hit.alt_description || 'Image',
  }));
};
