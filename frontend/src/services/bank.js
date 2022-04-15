import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/transaction'

const getAll = () => {
    return axios.get(baseUrl).then(r=>r.data)
}

const create = (transaction) => {
    return(
    axios
        .post(baseUrl,transaction)
        .then(response => response.data)
    )
}

const update = (id,newNum) => {
    const request = axios.put(`${baseUrl}/${id}`, newNum)
    return request.then(response => response.data)
}

const deleteNum = (id) => {
    console.log({id})
    axios
        .delete(`${baseUrl}/${id}`)
        .then(()=>{console.log("deleted")})
}

const transService = {getAll,create,update,deleteNum}
export default transService