// No changes needed - keep window.location.href for logout
import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/"; // Full page refresh to update Header
    });
  };

  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
}