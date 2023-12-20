import './App.css'
import { BrowserRouter, Link } from 'react-router-dom'
import AppRoutes from './components/nav/AppRoutes'
import { Provider } from './context/resumeContext'
import Navbar from './components/nav/CustomNavbar'
import { UserProvider } from './context/userContext';

function App() {
  return (
    <UserProvider>
      <Provider>
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </UserProvider>
  );
}

export default App
