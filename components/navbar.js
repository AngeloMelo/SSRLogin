import Link from 'next/link'

const Navbar = () =>(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">SSR</a>
        
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link href="/"><a className="nav-link">Home</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/users"><a className="nav-link">Users</a></Link>
                </li>
            </ul>
            <Link href="/logout">
                <a className="btn btn-outline-danger" type="button">Sign out</a>
            </Link>
        </div>
    </nav>
)

export default Navbar