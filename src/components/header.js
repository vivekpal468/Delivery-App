import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  console.log("Header reandered");

  // If no dependecy array =>  useEffect is called on every render.
  // If dependecy array is empty([]) => useEffect is called only on initial render(just Once).
  // If There is a dependecy array => useEffect is called only on when you changes on dependency.
  useEffect(()=> {
    console.log("useEffect ran");
},[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">    
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Logout"
                ? setbtnNameReact("Login")
                : setbtnNameReact("Logout");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
