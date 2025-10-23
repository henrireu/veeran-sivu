import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import Navbar from './components/navbar'
import Etusivu from "./pages/Etusivu"
import Tutkimus from './pages/Tutkimus'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex w-screen bg-gradient-to-b from-[#f8f7f3] to-[#e9e5d9] flex flex-col">
        {/*<Etusivu />*/}
        <Navbar />
      

        <Routes>
          <Route path="/tutkimus" element={<Tutkimus />} />
          <Route path="/" element={<Etusivu />} />
        </Routes>

      </div>

    </Router> 
  )
}

export default App
