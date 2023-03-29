import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?',
  
    params:{
        'api_key':'778ffd88b3a2fbcdff20e9c3ff8d90a4'
    }

})

export default axiosInstance