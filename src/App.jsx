import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EcomVariant from './pages/EcomVariant'
import Test from './pages/Test'
import Barcodegenerator from './pages/Barcodegenerator'
import TicTacToe from './pages/TicTacToe'
import Tabuser from './pages/Tabuser'
import ActualTabs from './pages/ActualTabs'
import CartTest from './pages/CartTest'
import SideBar from './components/SideBar'
import Cart from './pages/Cart'
import ReactMemo from './pages/ReactMemo'


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
          <Route path='/actualTabs' element={<ActualTabs />} />
          <Route path='/cartTest' element={<CartTest />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/reactMemo' element={<ReactMemo />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
