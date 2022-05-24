function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/index.html" >
                    <img src="/logo192.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
                    NavBar
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/index.html">Link 3</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success" type="submit">Login</button>
                </div>
            </div>
        </nav>
    );
  }
  
  export default NavBar;