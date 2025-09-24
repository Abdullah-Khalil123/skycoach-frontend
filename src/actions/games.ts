import { axiosInstance } from '@/utils/axios';

const getAllActiveGames = async () => {
  try {
    const response = await axiosInstance.get('/games/all-active');
    return response.data;
  } catch (error) {
    console.error('Error fetching active games:', error);
    throw error;
  }
};

const getHomePageGames = async () => {
  try {
    const response = await axiosInstance.get('/games/homepage');
    return response.data;
  } catch (error) {
    console.error('Error fetching homepage games:', error);
    throw error;
  }
};

export { getAllActiveGames, getHomePageGames };
