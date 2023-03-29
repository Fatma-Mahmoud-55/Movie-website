import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux'
import { removeFromFavorites } from '../../store/actions/favorites'
export const FavoriteMovies = () => {
    const favorites = useSelector(state => state.favorite.favorites)
    const dispatch = useDispatch()

  return (
    <>
      <div className='d-flex flex-wrap justify-content-evenly mt-5'>
        <h1>{favorites.length}</h1>
        {favorites.map((movie, index) => {
          return <Card style={{ width: '18rem' }} key={index} className="mt-5">
            <i className="bi bi-trash3"onClick={() => dispatch(removeFromFavorites(movie))} ></i>
          
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.overview}
              </Card.Text>
             
            </Card.Body>
          </Card>
        })}
      </div>
      
    </>
  )
}
