function NavBar(){
    return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"> BADBANK </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" href="#/createaccount/"> CREATE ACCOUNT </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#/login/" id="login"> LOGIN </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#/deposit/"> DEPOSIT </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#/withdraw/"> WITHDRAWAL </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#/alldata/"> DATA </a>
        </li>
    </ul>
    </div>
</nav>
    );
}