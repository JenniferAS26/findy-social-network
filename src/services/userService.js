import axios from 'axios'
import { endpoints } from './endpoints'

const createUser = async ( body ) => {
  try {
    await axios.post(endpoints.users, body)
  } catch (error) {
    console.warn(error)
  }
}

const getUser = async ( id = '' ) => {
  try {
    const { data } = await axios.get(endpoints.users, id)
    return data
  } catch (error) {
    console.warn(error)
  }
}

const getUserByParams = async ( params ) => {
  try {
    const { data } = await axios.get(endpoints.users, { params: params })
    return data
  } catch (error) {
    console.warn(error)
  }
}

const updateUser = async ( id, body ) => {
  try {
    await axios.patch(endpoints.users, id, body)
  } catch (error) {
    console.warn(error)
  }
}

const updateUserByParams = async ( body, params ) => {
  try {
    await axios.patch(endpoints.users, body, { params: params })
  } catch (error) {
    console.warn(error)
  }
}

const deleteUser = async ( id ) => {
  try {
    await axios.delete(endpoints.users, id)
  } catch (error) {
    console.warn(error)
  }
}

export {
  createUser,
  getUser,
  getUserByParams,
  updateUser,
  updateUserByParams,
  deleteUser
}