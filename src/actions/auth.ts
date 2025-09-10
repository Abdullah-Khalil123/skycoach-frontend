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

export { login };
