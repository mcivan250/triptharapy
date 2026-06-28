import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destination from './pages/Destination'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 text-stone-900 font-sans flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination/:id" element={<Destination />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
