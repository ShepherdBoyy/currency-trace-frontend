import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/currency-trace-frontend/" className="site-title">
        CurrencyTrace
      </Link>
      <ul>
        <CustomLink
          to="/currency-trace-frontend/recognize"
          className="nav-name"
        >
          Recognize
        </CustomLink>
        <CustomLink to="/currency-trace-frontend/convert" className="nav-name">
          Convert
        </CustomLink>
        <CustomLink to="/currency-trace-frontend/catalog" className="nav-name">
          Catalog
        </CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
