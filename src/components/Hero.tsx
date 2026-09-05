import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-text">
                    <p className="eyebrow">Junior Developer</p>
                    <h1>I build things carefully, from code to security.</h1>
                    <p className="lede">
                        Looking for an apprenticeship where I can grow in application security and DevSecOps,
                        with a particular interest in post-quantum cryptography
                    </p>
                    <div className="actions">
                        <Link className="btn" to="/about">Learn more about me</Link>
                        <a href="mailto:mailletnills@gmail.com">Get in touch</a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="/assets/hero.jpg" alt="Hero Photography" />
                </div>
            </div>
        </section>
    );
}