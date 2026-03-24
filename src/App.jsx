import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import NewsDetail from './pages/NewsDetail.jsx'
import EventDetail from './pages/EventDetail.jsx'

export default function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/events/:id" element={<EventDetail />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
