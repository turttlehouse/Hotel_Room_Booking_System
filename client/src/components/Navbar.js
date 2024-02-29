import React from "react";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function Logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }

  const navAction = () => {
    if (user) {
      return (
        <ul className="navbar-nav mr-5 " style={{background:"yellow"}}>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-user mr-2"></i>
              {user.name}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/profile">
                Profile
              </a>

              <a className="dropdown-item" href="#" onClick={Logout}>
                Logout
              </a>
            </div>
          </div>
        </ul>
      );
    }

    return (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/register">
            Register
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/" style={{fontWeight:"bold" }}>
          BIG HOTEL
        </a>

       <div className="anchor" >
       <a href="/" style={{color:"DarkOliveGreen"}}>
          Home
        </a>
        <a href="/about" style={{color:"DarkOliveGreen"}}>
          About Us
        </a>
        <a href="/home" style={{color:"DarkOliveGreen"}}>
          Rooms
        </a>
       </div>
       <div>
       <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i class="fas fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {navAction()}
        </div>
       </div>
      </nav>
    </div>
  );
}

export default Navbar;
