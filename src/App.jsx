// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// import MovieCard from "./components/MovieCard"
import { Routes,Route } from "react-router-dom"
import Home from"./pages/Home"
import Favourites from "./pages/Favourites"
import NavBar from "./components/NavBar"
import { MovieProvider } from "./context/MovieContext"
import "./css/App.css"
function App() {
return(
<MovieProvider>
<div>
  <NavBar/>
 <main className="main-content">
  <Routes><Route path="/" element={<Home/>}/>
  <Route path="/favourites" element={<Favourites/>}/></Routes>
  
 </main>
 </div>
 </MovieProvider>
);
}

export default App
