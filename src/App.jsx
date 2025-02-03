import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BottomNavigation from './Component/BottomNavigation'
import Header from './Component/Header'
import Tracker from './Component/Tracker'
import LiveHealth from './Component/LiveHealth'
import MainContent from './Component/MainContent'

function App() {
 

  return (
    <div className="relative">
      <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 pt-5 pb-24 border-2">
      <div class="w-full max-w-md min-h-screen ">
      <MainContent/>
       <LiveHealth/>
        <BottomNavigation/>
        
        </div>
      </div>
    </div>
  )
}

export default App
