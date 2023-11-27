const BASE_URL = 'https://findy-app-service.onrender.com'
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dkd5jyxby/auto/upload'

export const endpoints = {
  users: `${BASE_URL}/users`,
  user: (email, username) => `${BASE_URL}/users?username=${username}&email=${email}`,
  following: `${BASE_URL}/following`,
  posts: `${BASE_URL}/posts`,
  cloudinary: CLOUDINARY_URL,
  comments: `${BASE_URL}/comments`, 
  followerPost: `${BASE_URL}/followerPost`
}