import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import SubmitComplaint from './pages/SubmitComplaint'
import AdminComplaints from './pages/AdminComplaints'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
 
function App() {


  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/submit' element={<SubmitComplaint />}/>
        <Route path='/admin' element={<AdminComplaints />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
