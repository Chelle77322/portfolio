import Link from 'next/link';
const Navbar = () => (
    <navigate className = "navbar navbar-expand-lg navbar-dark bg dark">
        <Link href = "/">
            <a className = "navbar-brand">Michelle Hall</a>
        </Link>
        <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target = "#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded = "false" aria-label = "Toggle navigation">
            <span className = "navbar-toggler-icon"/>"
        </button>

    <div className = "collapse navbar-collapse justify-content-end" id = "navbarSupportedContent">
        <ul className = "navbar-nav">
        <li className="nav-item">
                <Link href="/about">
                <a className = "nav-link"> About Me</a>
                </Link>   
            </li>
            <li className="nav-item">
                <Link href="/contact">
                <a className = "nav-link"> Contact Me</a>
                </Link>  
            </li>
            <li className="nav-item">
                <Link href="/">
                <a className = "nav-link">Project Gallery</a>
                </Link>  
            </li>
            <li className = "nav-item">
                <Link href = "/resume">
                <a className ="nav-link">Resume</a>
                </Link>
            </li>
        </ul>
    </div>
    </navigate>
);
export default Navbar;
