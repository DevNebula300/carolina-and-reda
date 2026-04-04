import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { RSVP_LINK } from './pages/shared'

const menuItems: Array<{ to: string; label: string; end?: boolean }> = [
  { to: '/invitation', label: 'Invitation' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/accommodations', label: 'Accommodations' },
  { to: '/discover-marrakech', label: 'Discover Marrakech' },
  { to: '/registry', label: 'Registry' },
]

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    setScrolled(window.scrollY > 60)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const navClass = ['nav', scrolled ? 'nav--solid' : 'nav--transparent'].join(' ')

  return (
    <>
      <nav className={navClass}>
        {isHome ? (
          <a className="nav__brand" href="#home">
            Home
          </a>
        ) : (
          <Link className="nav__brand" to="/">
            Home
          </Link>
        )}
        <ul className="nav__menu">
          {isHome ? (
            <>
              <li><a href="#invitation">Invitation</a></li>
              <li>
                <a href={RSVP_LINK} target="_blank" rel="noopener noreferrer">
                  RSVP
                </a>
              </li>
              <li><a href="#accommodations">Accommodations</a></li>
              <li><a href="#discover">Discover Marrakech</a></li>
              <li><a href="#registry">Registry</a></li>
            </>
          ) : (
            menuItems.map(({ to, label, end }) => (
              <li key={to}>
                {to === '/rsvp' ? (
                  <a href={RSVP_LINK} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ) : (
                  <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {label}
                  </NavLink>
                )}
              </li>
            ))
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
