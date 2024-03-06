import style from "./Header.module.scss";
import Logo  from "../../assets/logo-no-background.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={style.header}>
      <img src={Logo} alt="" />
      <nav>
        <ul>
            <Link to='about-us'>Про нас</Link>
            <li>Мій кабінет</li>
            <Link to='cart'>Kорзина</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
