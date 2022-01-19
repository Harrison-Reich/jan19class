import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Movie from './pages/Movie'
import Game from './pages/Game'
import Song from './pages/Song'
import Food from './pages/Food'

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/'>Movie</Link>
        <Link to='/Game'>Game</Link>
        <Link to='/Song'>Song</Link>
        <Link to='/Food'>Food</Link>
      </div>
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/Game' element={<Game />} />
        <Route path='/Song' element={<Song />} />
        <Route path='/Food' element={<Food />} />
      </Routes>
    </Router>
  )
}

export default App