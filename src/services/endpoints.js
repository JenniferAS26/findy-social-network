const BASE_URL = 'https://backend-findy-railway-production.up.railway.app'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkd5jyxby/image/upload'

export const endpoints = {
  users: `${BASE_URL}/users`,
  following: `${BASE_URL}/following`,
  posts: `${BASE_URL}/posts`,
  cloudinary: CLOUDINARY_URL,
  comments: `${BASE_URL}/comments`, 
}