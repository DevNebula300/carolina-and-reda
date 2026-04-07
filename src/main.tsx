import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './App'
import './index.css'
import { HomePage } from './pages/Home'
import { InvitationPage } from './pages/Invitation'
import { ProgramPage } from './pages/Program'
import { RsvpPage } from './pages/Rsvp'
import { AccommodationsPage } from './pages/Accommodations'
import { DiscoverPage } from './pages/Discover'
import { RegistryPage } from './pages/Registry'
import { DressCodePage } from './pages/DressCode'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function OnePageExperience() {
  return (
    <div>
      <section id="home"><HomePage /></section>
      <section id="invitation"><InvitationPage /></section>
      <section id="rsvp"><RsvpPage /></section>
      <section id="accommodations"><AccommodationsPage /></section>
      <section id="discover"><DiscoverPage /></section>
      <section id="registry"><RegistryPage /></section>
      <section id="dress-code"><DressCodePage /></section>
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<OnePageExperience />} />
          <Route path="/invitation" element={<InvitationPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/rsvp" element={<RsvpPage />} />
          <Route path="/accommodations" element={<AccommodationsPage />} />
          <Route path="/discover-marrakech" element={<DiscoverPage />} />
          <Route path="/registry" element={<RegistryPage />} />
          <Route path="/dress-code-moodboard" element={<DressCodePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
