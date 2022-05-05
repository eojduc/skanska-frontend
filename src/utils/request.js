import axios from 'axios';


const url = 'https://shrouded-thicket-81070.herokuapp.com/';


const get = () => {
  return axios.get(`${url}/delivery`);
}

const post = (data) => {
  return axios.post(`${url}/delivery`, {...data});
}

const update = (data) => {
  return axios.put(`${url}/delivery`, {...data});
}

const remove = (id) => {
  return axios.delete(`${url}/delivery`, {id: id});
}

export default { url, get, post, update, remove };