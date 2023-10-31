import axios from 'axios'
import { endpoints } from './endpoints'

const addPost = async ( body ) => {
  try {
    await axios.post(endpoints.posts, body)
  } catch (error) {
    console.warn(error)
  }
}

const getPost = async ( id = '' ) => {
  try {
    const { data } = await axios.get(endpoints.posts, id)
    return data
  } catch (error) {
    console.warn(error)
  }
}

const deletePost = async ( id ) => {
  try {
    await axios.delete(endpoints.posts, id)
  } catch (error) {
    console.warn(error)
  }
}

export {
  addPost,
  getPost,
  deletePost
}