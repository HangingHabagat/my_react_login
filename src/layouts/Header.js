import { Link } from "react-router-dom";
import Logo from "../components/Images/karmanavbarlogo.png";
const Header = () => {
  return (
    <header>
      <div className='LogoContainer'>
        <img src={Logo} alt='CompanyLogo' />
      </div>
      <div className='Pages'>
        <Link className='headerlink' to='/home'>
          {" "}
          Home{" "}
        </Link>
      </div>
      <div className='Pages'>
        <Link className='headerlink' to='/about'>
          {" "}
          About{" "}
        </Link>
      </div>
      <div className='Pages'>
        <Link className='headerlink' to='/contact'>
          {" "}
          Contact{" "}
        </Link>
      </div>
      <div className='Pages'>
        <Link className='headerlink' to='/blog'>
          {" "}
          Blog{" "}
        </Link>
      </div>
      <div className='Pages'>
        {" "}
        <Link className='headerlink' to='/login'>
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
