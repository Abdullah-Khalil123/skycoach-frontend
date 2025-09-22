import { axiosInstance } from '@/utils/axios';

const getNavigation = async () => {
  try {
    const response = await axiosInstance.get('/navigation');
    return response.data;
  } catch (error) {
    console.log('Error fetching navigation data:', error);
    throw error;
  }
};

export { getNavigation };
