import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const links = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/tech-watch', label: 'Tech watch' },
    { to: '/about', label: 'About' },
];

export default function Nav() {
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const close = () => setOpen(false);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        const onPointer = (e: PointerEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', onKey);
        document.addEventListener('pointerdown', onPointer);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('pointerdown', onPointer);
        };
    }, [open]);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 701px)');
        const onChange = (e: MediaQueryListEvent) => {
            if (e.matches) setOpen(false);
        };
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);

    return (
        <nav ref={navRef} className={open ? 'nav--open' : undefined}>
            <div className="container bar">
                <NavLink to="/" className="logo" onClick={close}>Nills Maillet</NavLink>

                <button
                    type="button"
                    className="burger"
                    aria-expanded={open}
                    aria-controls="nav-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => setOpen((o) => !o)}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul id="nav-menu" className="menu">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                end
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={close}
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