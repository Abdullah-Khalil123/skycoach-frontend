import { axiosInstance } from '@/utils/axios';

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post('/auth/login', null, {
      params: { email, password },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const register = async ({
  email,
  password,
  password_confirmation,
}: {
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  try {
    const response = await axiosInstance.post('/auth/register', null, {
      params: { email, password, password_confirmation },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProviderList = async () => {
  try {
    const response = await axiosInstance.get('/auth/social/providers');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { login, register, getProviderList };
