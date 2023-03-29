import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import axiosInstance from '../../axiosConfig/instance';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details=()=>{

    const { id } = useParams()
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=778ffd88b3a2fbcdff20e9c3ff8d90a4&language=en-US`).then((response) => {
            setMovie(response.data)
            console.log(response);
        }).catch((err) => {
            console.log(err);
        })

    }, [])
    return (
       <div>
            <Card style={{ width: '18rem' }}className="m-3">
                 <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                 <Card.Body>
                   <Card.Title>{movie.original_title}</Card.Title>
                   <Card.Text>
                   {movie.overview}
                   </Card.Text>
                 
                 </Card.Body>
               </Card>
       </div>
      );
}

export default Details