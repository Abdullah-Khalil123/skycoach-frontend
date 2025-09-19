import { axiosInstance } from '@/utils/axios';

const getBanners = async (params?: {}) => {
  try {
    const response = await axiosInstance.get('/banners', params);
    return response.data;
  } catch (error) {
    console.error('Error fetching banners:', error);
    throw error;
  }
};

export { getBanners };
