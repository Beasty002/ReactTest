import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EcomVariant from './pages/EcomVariant'
import SideBar from './components/sideBar'
import Test from './pages/Test'
import Barcodegenerator from './pages/Barcodegenerator'
import TicTacToe from './pages/TicTacToe'


const App = () => {
  return (
    <div className='flex'>
      <SideBar />
      <main className='max-h-screen bg-[#f5f5f5] flex-1 p-4'>
        <Routes>
          <Route path='/' element={<EcomVariant />} />
          <Route path='/test' element={<Test />} />
          <Route path='/barcode-generator' element={<Barcodegenerator />} />
          <Route path='/tictactoe' element={<TicTacToe />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
