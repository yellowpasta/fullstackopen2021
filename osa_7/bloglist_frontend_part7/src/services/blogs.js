import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const createNew = async (newBlog) => {
  const config = { headers : { Authorization : token } }
  const response = await axios.post(baseUrl, newBlog, config)
  return response.data
}

const addLike = async (blogId, likes) => {
  const config = { headers : { Authorization : token } }
  const response = await axios.put(`${baseUrl}/${blogId}`, { 'likes': likes + 1 }, config)
  return response.data
}

const addComment = async (blogId, comment) => {
  const response = await axios.post(`${baseUrl}/${blogId}/comments`, { comment })
  return response.data
}

const remove = async (blogId) => {
  const config = { headers : { Authorization : token } }
  const response = await axios.delete(`${baseUrl}/${blogId}`, config)
  return response.data
}

export default { addComment, addLike, createNew, getAll, remove, setToken }