import axios from 'axios';


const url = 'http://localhost:3001/delivery/';


const get = () => {
  return axios.get(url);
}

const post = (data) => {
  return axios.post(url, {...data});
}

const update = (data) => {
  return axios.put(url, {...data});
}

const remove = (id) => {
  return axios.delete(url, {id: id});
}

export default { get, post, update, remove };