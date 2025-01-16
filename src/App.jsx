import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EcomVariant from './pages/ecomVariant'
import SideBar from './components/sideBar'
import Test from './pages/Test'


const App = () => {
  return (
    <div className='flex'>
      <SideBar />
      <main className='max-h-screen bg-[#f5f5f5] flex-1 p-4'>
        <Routes>
          <Route path='/' element={<EcomVariant />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
