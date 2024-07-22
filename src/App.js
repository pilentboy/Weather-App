import Container from './components/container'
import './index.css'
import Location from './pages/Location'
import Result from './pages/Result'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {




  return(
    <Container>
          <BrowserRouter>
            <Routes>
          
                  <Route  path='/' element={<Location/>} />
                  <Route path='/result' element={<Result/>} />
              
          
            </Routes>
          </BrowserRouter>
    </Container>
    
  )
 
  
}

export default App;