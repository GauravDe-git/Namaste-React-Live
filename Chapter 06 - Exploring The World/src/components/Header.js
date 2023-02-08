import { useState } from "react";
import logo from "../../Image/Grub on Wheels.png";

function userLoginCheck() {
  //API calls for authorization
  return false;
}

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <header>
        <a href="/">
          <img src={logo} alt="hello?" className="logo" />
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </nav>
        {isLoggedIn ? (<button onClick={()=> setIsLoggedIn(false)}> Login </button>) : 
        (<button onClick={()=> setIsLoggedIn(true)}> Logout </button>) }
      </header>
    </>
  );
};

export default HeaderComponent;
