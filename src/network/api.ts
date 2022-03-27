// IMPORTANT 本文件应该由IDL生成，这里只是模拟所以手写

import BaseHTTP from './BaseHTTP';
import { HOST } from './constants';

const mainAPI = new BaseHTTP(HOST.MAIN);

export const invite = (name: string, email:string) => mainAPI.post('/prod/fake-auth', {
  name,
  email,
});
