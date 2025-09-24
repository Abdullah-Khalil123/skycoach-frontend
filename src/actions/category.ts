import { axiosInstance } from '@/utils/axios';

const getGameCategories = async (gameSlug: string) => {
  try {
    const response = await axiosInstance.get(`/games/${gameSlug}/categories`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching categories for game ${gameSlug}:`, error);
    throw error;
  }
};

export { getGameCategories };
