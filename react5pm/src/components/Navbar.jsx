

function Navbar()
{

    return(

<nav class="navbar navbar-expand-sm bg-dark ">
  <div class="container-fluid">
    
    <a class="navbar-brand text-white" href="#">SSSIT</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
       

    )
}


export default Navbar;

