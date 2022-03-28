// IMPORTANT 本文件应该由IDL生成，这里只是模拟所以手写，都生成函数是为了更好地tree shaking

import BaseHTTP from './BaseHTTP';
import { HOST } from './config';

const mainAPI = new BaseHTTP(HOST.MAIN);

export const invite = (name: string, email: string) => mainAPI.post<{data: string}>('/prod/fake-auth', {
  name,
  email,
});
