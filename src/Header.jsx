 import { Link } from "react-router-dom";
  import { LogoutLink } from "./LogoutLink";

  export function Header() {
    const email = localStorage.getItem("email");

    return (
      <header>
        <nav>
        {/* <a href="#">Home</a> */}
         <Link to="/">Home</Link>
          {email ? (
            <>
              <span> | Logged in as {email} | </span>
              <LogoutLink />
            </>
          ) : (
            <>
              <span> | </span>
            {/* <a href="#signup">Signup</a> */}
             <Link to="/signup">Signup</Link>
              <span> | </span>
            {/* <a href="#login">Login</a> */}
             <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </header>
    );
  }