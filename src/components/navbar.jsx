import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="relative flex gap-5">
          <Link to="/">etusivu</Link>
          <Link to="/tutkimus">tutkimus</Link>
        </nav>
    )
}

export default Navbar