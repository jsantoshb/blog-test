import Link from "next/link";

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand">Blog</a>
      </Link>
     
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      
      </button>
      <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/admin">
              <a className="nav-link">Admin</a>
            </Link>
          </li>
            <li className="nav-item">
            <Link href="/admin">
              <a className="nav-link">Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;