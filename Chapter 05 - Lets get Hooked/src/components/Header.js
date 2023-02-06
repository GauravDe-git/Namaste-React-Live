import logo from "../../Image/Grub on Wheels.png";


const HeaderComponent = () => {
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
        </header>
      </>
    );
  };

  export default HeaderComponent;