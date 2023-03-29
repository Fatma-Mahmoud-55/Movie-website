import axiosInstance from './../../axiosConfig/instance';


export default function changeMovies(page){


   return (dispatch)=>{

        axiosInstance.get(`&page=${page}`).then((respons) => {
            console.log(respons);
            dispatch({type:'SET_MOVIES',payload:respons.data.results})
      
          }).catch((error) => {
            console.log(error);
          })
     
    }
}