import 'bulma/css/bulma.min.css';
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';

function App() {
  const [favorites, setFavorites] = useState(() => {
    const getFavorites = JSON.parse(localStorage.getItem('favorites'));
    return getFavorites || []
  });

  const addToFavorites = (pokemon) => {
    setFavorites([...favorites, pokemon])
  }

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.number !== id))
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  console.log(favorites)
  return (
    <div className="App">
      <Router >
        <Navbar />
        <main>
          <Routes>
            <Route 
              path='/' 
              element={
                <Search 
                  addToFavorites={addToFavorites}
              />} 
            />
            <Route 
              path='/favorites' 
              element={
                <Favorites 
                  removeFromFavorites={removeFromFavorites}
                  favorites={favorites}
              />} 
            />
          </Routes>
        </main>
      </Router>
      
      
    </div>
  );
}

export default App;
