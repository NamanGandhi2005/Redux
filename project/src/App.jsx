import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {


  
  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <SearchBar></SearchBar>
      <Tabs></Tabs>
      <ResultGrid/>
    </div>
  )
}

export default App