import { useContext, useState } from "react";
import logo from "../Image/Grub on Wheels.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

function userLoginCheck() {
  //API calls for authorization
  return false;
}

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const {user} = useContext(UserContext);

  return (
    
    <>
      <header className="flex justify-between bg-lime-200 shadow-lg">
        <a href="/">
          <img src={logo} alt="hello?" className="h-[7rem]" />
        </a>
        <nav>
          <ul className="flex py-10 px-2">
            <li className="px-2"><Link to= "/"> Home </Link></li>
            <li className="px-2"><Link to= "/about"> About </Link></li>
            <li className="px-2">Contact</li>
            <li className="px-2">Cart</li>
            <li className="px-2"><Link to= "/instamart">Instamart</Link></li>
          </ul>
        </nav>
        {user.name}
        {isLoggedIn ? (<button className="hover:bg-green-500 p-2" onClick={()=> setIsLoggedIn(false)}> Login </button>) : 
        (<button className="hover:bg-green-500 p-2" onClick={()=> setIsLoggedIn(true)}> Logout </button>) }
      </header>
    </>
  );
};

export default HeaderComponent;
