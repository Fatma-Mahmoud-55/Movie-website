import { useState, useEffect } from 'react'
import React from 'react'
import axiosInstance from './../../axiosConfig/instance';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

import { addToFavorites } from '../../store/actions/favorites'
import changeMovies from '../../store/actions/movies'
const Movies = () => {

  // const [movies, setMovies] = useState([])
  const movies = useSelector((state) => state.movies.movies)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   // axiosInstance.get(`&page=${page}`).then((respons) => {
  //   //   setMovies(respons.data.results)

  //   // }).catch((error) => {
  //   //   console.log(error);
  //   // })
  //   // dispatch(changeMovies())
  // }, [])
  useEffect(() => {
    // axiosInstance.get(`&page=${page}`).then((respons) => {
    //   setMovies(respons.data.results)

    // }).catch((error) => {
    //   console.log(error);
    // })
    dispatch(changeMovies(page))
  }, [page])
  function handlePreviousPage() {
    if (page != 0)
      setPage(page - 1)
  }
  function handleNextPage() {
   
      setPage(page + 1)
  }

  function handleAddToFavorite(movie,evt) {
    
    dispatch(addToFavorites(movie))
    evt.target.className='bi-star-fill'
  }
  return (
    <>
      <div
        className="container d-flex flex-wrap m-2 "
        style={{ justifyContent: "space-between" }}
      >
        <Button
          variant="primary"
          disabled={page <= 1 ? true : false}
          onClick={handlePreviousPage}
        >
          prev
        </Button>
        <Button variant="primary" onClick={handleNextPage}>
          Next
        </Button>
      </div>
      <div className='d-flex flex-wrap justify-content-evenly mt-5'>
        {movies.map((movie, index) => {
          return <Card style={{ width: '18rem' }} key={index} className="mt-5">
            <i className="bi bi-star " onClick={(evt)=>{handleAddToFavorite(movie,evt)}}></i>
            {/* <i class="bi bi-star-fill"></i> */}
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.overview}
              </Card.Text>
              <Link to={`/details/${movie.id}`}>view details</Link>
            </Card.Body>
          </Card>
        })}
      </div>
      {/* <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" onClick={() => { handlePreviousPage() }}>Previous</a></li>

          <li className="page-item"><a className="page-link" onClick={() => { handleNextPage() }}>Next</a></li>
        </ul>
      </nav> */}
    </>
  );
}

export default Movies