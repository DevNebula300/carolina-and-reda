import { NavLink, Outlet } from 'react-router-dom'

const menuItems = [
  { to: '/invitation', label: 'Invitation', end: true },
  { to: '/program', label: 'Program' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/accommodations', label: 'Accommodations' },
  { to: '/discover-marrakech', label: 'Discover Marrakech' },
  { to: '/registry', label: 'Registry' },
  { to: '/dress-code-moodboard', label: 'Dress Code & Moodboard' },
]

function Layout() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" className="nav__brand">
          Carolina &amp; Reda Wedding Celebration
        </NavLink>
        <ul className="nav__menu">
          {menuItems.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink to={to} end={end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
