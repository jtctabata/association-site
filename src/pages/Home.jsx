import React from 'react'
import MainView from '../sections/MainView.jsx'
import Purpose from '../sections/Purpose.jsx'
import NewsList from '../sections/NewsList.jsx'
import EventList from '../sections/EventList.jsx'
import About from '../sections/About.jsx'
import Contact from '../sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <MainView />
      <Purpose />
      <NewsList />
      <EventList />
      <About />
      <Contact />
    </>
  )
}
