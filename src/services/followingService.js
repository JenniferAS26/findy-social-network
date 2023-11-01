import axios from 'axios'
import { endpoints } from './endpoints'

const addFollow = async ( body ) => {
  try {
    await axios.post(endpoints.following, body)
  } catch (error) {
    console.warn(error)
  }
}

const getFollowing = async ( id = '' ) => {
  try {
    const { data } = await axios.get(endpoints.following, id)
    return data
  } catch (error) {
    console.warn(error)
  }
}

const getFollowingByParams = async ( params ) => {
  try {
    const { data } = await axios.get(endpoints.following, { params: params })
    return data
  } catch (error) {
    console.warn(error)
  }
}

const removeFollow = async ( id ) => {
  try {
    await axios.delete(endpoints.following, id)
  } catch (error) {
    console.warn(error)
  }
}

export {
  addFollow,
  getFollowing,
  getFollowingByParams,
  removeFollow
}