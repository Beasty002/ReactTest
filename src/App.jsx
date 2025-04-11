import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EcomVariant from './pages/EcomVariant'
import SideBar from './components/sideBar'
import Test from './pages/Test'
import Barcodegenerator from './pages/Barcodegenerator'
import TicTacToe from './pages/TicTacToe'
import Tabuser from './pages/Tabuser'
import Testing2 from './pages/Testing2'
import ActualTabs from './pages/ActualTabs'


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
          <Route path='/tabs' element={<Tabuser />} />
          <Route path='/testing2' element={<Testing2 />} />
          <Route path='/actualTabs' element={<ActualTabs />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
