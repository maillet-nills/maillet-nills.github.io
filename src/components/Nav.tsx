import { NavLink } from 'react-router-dom';
import './Nav.css';

const links = [
    { to: '/', label: 'Home' },
    { to: '/tech-watch', label: 'Tech watch' },
    { to: '/about', label: 'About' },
];

export default function Nav() {
    return (
        <nav>
            <div className="container bar">
                <NavLink to="/" className="logo">Nills Maillet</NavLink>
                <ul>
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                end
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}