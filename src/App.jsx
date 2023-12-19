import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import AppRoutes from './components/nav/AppRoutes'
import { Provider } from './context/resumeContext'
import { Button } from 'react-bootstrap'
import Navbar from './components/nav/Navbar'
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navbar/>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/list">List</Link></button>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
