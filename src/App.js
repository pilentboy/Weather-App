import Container from './components/container'
import './index.css'
import 'animate.css';
import ProtectedRoute from './components/protectedRoute';
import Home from './pages/Home'
import Result from './pages/Result'
import SettingsProvider from '../src/context/settings'
import Nav from './pages/Nav';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

function App() {




  return(
    <Container>
          <BrowserRouter>
          <SettingsProvider>

            <Routes>
                  <Route path='/' element={<Nav/>}>
                    <Route  index element={<Home/>} />
                      <Route path='result' element={<ProtectedRoute/>} >
                      <Route index element={<Result/>} />
                    </Route>
                  </Route>

                  <Route path="*" element={<Navigate to="/" />} />

              </Routes>

          </SettingsProvider>
          
          </BrowserRouter>
    </Container>
    
  )
 
  
}

export default App;