import { axiosInstance } from '@/utils/axios';

const getReviews = async (params?: Record<string, string>) => {
  try {
    const response = await axiosInstance.get('/reviews', params);
    return response.data;
  } catch (error) {
    console.log('Error Fetching Reviews :', error);
    throw error;
  }
};

export { getReviews };
