import axios from 'axios'
import { endpoints } from './endpoints'

const addComment = async ( body ) => {
  try {
    await axios.post(endpoints.comments, body)
  } catch (error) {
    console.warn(error)
  }
}

const getCommentsByParams = async ( params ) => {
  try {
    const { data } = await axios.get(endpoints.comments, { params: params })
    return data
  } catch (error) {
    console.warn(error)
  }
}

export { addComment, getCommentsByParams }