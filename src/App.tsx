import './App.css'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router";
import Home from "./pages/Home";
import Header from '../components/Header';
import { useRef } from 'react';
import PageTransition from '../components/PageTransition';
import Contact from './pages/Contact';
import Info from './pages/Info';
import Project from './pages/Project';
import ScrollToTop from '../components/ScrollToTop';
import Credit from './pages/Credit';


const Layout = () => {
  const transitionRef = useRef<{
    animateIn: () => Promise<void>
    animateOut: () => void
  } | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleNav = async (path: string) => {
    if (location.pathname === path) {
      return
    }
    const transition = transitionRef.current
    if (!transition) return

    await transition.animateIn()
    navigate(path);
    transition.animateOut()
  }

  return(
    <>
    <Header handleNav = {handleNav}/>
      <ScrollToTop/>
     <Routes>
        <Route path='/' element={<Home handleNav={handleNav}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/credit' element={<Credit/>}/>
        <Route path='project/:projectId' element={<Project/>}/>
      </Routes>
      <PageTransition ref={transitionRef}/>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
     <Layout/>
    </BrowserRouter>
  )
}

export default App
