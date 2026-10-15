import { Route, Routes } from 'react-router-dom'
import Stagiaires from './Stagiaires.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stagiaires" element={<Stagiaires />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
