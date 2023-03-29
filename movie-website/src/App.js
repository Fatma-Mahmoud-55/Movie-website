import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Movies from './Pages/movies/movies'
import NotFound from './Pages/notFound/notFound'
import Details from './Pages/details/details'
import Home from './Pages/home/home'
import {FavoriteMovies} from './Pages/favorites/favorites'
import Header from './Components/header/header'
import {LanguageProvider} from './contexts/context'
import { useState } from 'react';
function App() {
  const [language, setLanguage] = useState('en');
  return (
    <div>
      <LanguageProvider value={{ language, setLanguage }}>
      <Header />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/favorites" element={<FavoriteMovies />}/>
        <Route path="/details/:id" element={<Details />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      </div>
      </LanguageProvider>
    </div>
  )
}

export default App;
