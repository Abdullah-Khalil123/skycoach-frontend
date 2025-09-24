import { axiosInstance } from '@/utils/axios';

const getHotServices = async (params?: Record<string, string>) => {
  try {
    const response = await axiosInstance.get('/services/hot-services', params);
    return response.data;
  } catch (error) {
    console.log('Error fetching hot services:', error);
    throw error;
  }
};

const getServicesByGame = async (gameSlug: string) => {
  try {
    const response = await axiosInstance.get(`/games/${gameSlug}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching services for game ${gameSlug}:`, error);
    throw error;
  }
};

const getServicesByCategory = async (
  gameSlug: string,
  categorySlug: string
) => {
  try {
    const response = await axiosInstance.get(
      `/categories/${gameSlug}/${categorySlug}`
    );
    return response.data;
  } catch (error) {
    console.log(`Error fetching services for category ${categorySlug}:`, error);
    throw error;
  }
};

export { getHotServices, getServicesByGame, getServicesByCategory };
