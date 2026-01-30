import { Link } from "react-router-dom";
import logo from '../assets/Рисунок1.png';
import nlogo from '../assets/Рисунок2.png';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="hdr">
      <div className="nav">

        <Link to="/" className="logo">
          <div className="mark-plain">
            <img src={theme === 'day' ? logo : nlogo} alt="Логотип TN" />
          </div>
          <span>portfolio</span>
        </Link>

        <nav className="menu">
          <Link to="/resume" className="lnk">обо мне</Link>

          <div className="drop">
            <button className="btn">работы ▾</button>
            <div className="list">
              <Link to="/foto" className="item">фото</Link> 
              <Link to="/video" className="item">видео</Link> 
              <Link to="/design" className="item">дизайн</Link> 
              <Link to="/unity" className="item">unity</Link>
            </div>
          </div>

          <a href="/#contacts" className="lnk">контакты</a>

          <button className={`lamp ${theme}`} onClick={toggleTheme}>
            <div className="bulb"></div>
            <span>тема</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
