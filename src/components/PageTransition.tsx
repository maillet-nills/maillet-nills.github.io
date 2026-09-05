import { useEffect, type ReactNode } from 'react';
import './PageTransition.css';

interface PageTransitionProps {
    locationKey: string;
    children: ReactNode;
}

export default function PageTransition({ locationKey, children }: PageTransitionProps) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [locationKey]);

    return (
        <main key={locationKey} className="page-transition">
            {children}
        </main>
    );
}