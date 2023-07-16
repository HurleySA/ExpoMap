import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <div className='containerApp'>
    <Header/>
      <div className='containerOutlet'>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
