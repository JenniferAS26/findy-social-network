const BASE_URL = 'https://findy-app-service.onrender.com'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkd5jyxby/image/upload'

export const endpoints = {
  users: `${BASE_URL}/users`,
  following: `${BASE_URL}/following`,
  posts: `${BASE_URL}/posts`,
  cloudinary: CLOUDINARY_URL
}