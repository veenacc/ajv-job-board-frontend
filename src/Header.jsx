import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <a href="#">Home</a> | <Link to="/companies">Company</Link>
      </nav>
    </header>
  )
}
