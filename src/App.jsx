import React from 'react'
import { Routes, Route } from 'react-router-dom'
import EcomVariant from './pages/ecomVariant'
import SideBar from './components/sideBar'

const App = () => {
  return (
    <>
      <SideBar />
      <main>
        <Routes>
          <Route path='/' element={<EcomVariant />} />
        </Routes>
      </main>
    </>
  )
}

export default App
