import './App.css'
import Carousel1 from './Componentes/Carousels/Carousel1'
import CustomCarosel from './Componentes/Carousels/CustomCarosel'
import Navabar from './Componentes/Navabar/Navabar'
import DeashBoard from './Pages/DeashBoard'
import Home from './Pages/Home'

function App() {

  return (
    <div className='w-full min-h-screen' >
      {/* <UserRegistration/> */}
      {/* <HookForm/> */}
      <Navabar/>
      <DeashBoard/>
      {/* <Carousel1/>
      <CustomCarosel/> */}
      {/* <Home/> */}
    </div>
  )
}

export default App
