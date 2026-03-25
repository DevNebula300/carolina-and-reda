import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const menuItems: Array<{ to: string; label: string; end?: boolean }> = [
  { to: '/rsvp', label: 'RSVP' },
  { to: '/accommodations', label: 'Accommodations' },
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
        <ul className="nav__menu">
          {isHome ? (
            <>
              <li><a href="#rsvp">RSVP</a></li>
              <li><a href="#accommodations">Accommodations</a></li>
              <li><a href="#registry">Registry</a></li>     
            </>
          ) : (
            menuItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
                  {label}
                </NavLink>
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
