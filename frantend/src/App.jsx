import './App.css'
import Navabar from './Componentes/Navabar/Navabar'
import Footer from './Pages/Footer'
import AllRouts from './Routs/AllRouts'

function App() {

  return (
    <div className='w-full min-h-screen ' >
      <Navabar/>
      <AllRouts/>
      <Footer/>
    </div>
  )
}

export default App
