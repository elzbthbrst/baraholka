import style from "./Header.module.scss";
import Logo  from "../../assets/logo-no-background.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.header}>
        <Link to=''>
            <img src={Logo} alt="" />
        </Link>
      <nav>
        <ul>
            <Link to='about-us'>Про нас</Link>
            <Link to='log-in'>увійти</Link>
            <Link to='cart'>Kорзина</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
