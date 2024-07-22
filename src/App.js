import Container from './components/container'
import './index.css'
import 'animate.css';
import ProtectedRoute from './components/protectedRoute';
import Home from './pages/Home'
import Result from './pages/Result'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {




  return(
    <Container>
          <BrowserRouter>
            <Routes>
          
                <Route  path='/' element={<Home/>} />

                <Route path='/result' element={<ProtectedRoute/>} >
                  <Route index element={<Result/>} />
                </Route>

                <Route path='*' element={<Home/>} />

            </Routes>
          </BrowserRouter>
    </Container>
    
  )
 
  
}

export default App;