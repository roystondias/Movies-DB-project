//adding CSS to the Navbar
import './Navbar.css';
//importing logo
import logo from '../Logo/logo.svg';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <img src={logo?.src} alt="" />
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">TV shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">More</a>
                        </li>
                    </ul>
                    <div className="d-flex text-white mx-3" role="search">
                    </div>
                </div>
            </div>
        </nav>
    )
}