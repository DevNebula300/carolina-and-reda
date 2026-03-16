import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
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
