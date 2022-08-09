import axios from 'axios'
//this js file is used to handle base url using axios create method
const instance =axios.create({
   baseURL:"https://api.themoviedb.org/3"
})

export default instance