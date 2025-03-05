import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; // Импортируем изображение
import './app.css'; 

const Menu = () => {
    return (
        <nav className="menu">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Логотип" /> {/* Добавляем изображение */}
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/game">Карточки</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;