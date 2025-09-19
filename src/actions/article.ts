import { axiosInstance } from '@/utils/axios';

const getArticles = async (params?: {}) => {
  try {
    const response = await axiosInstance.get('/articles', params);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export { getArticles };
