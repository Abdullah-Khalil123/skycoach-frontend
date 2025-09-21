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

export { getHotServices };
