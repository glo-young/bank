function NavBar(){
    return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#"> BADBANK </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a className="nav-link" href="#/createaccount/"> CREATE ACCOUNT </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/login/" id="login"> LOGIN </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/deposit/"> DEPOSIT </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/"> WITHDRAWAL </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/balance/"> BALANCE </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#/alldata/"> DATA </a>
        </li>
    </ul>
    </div>
</nav>
    );
}