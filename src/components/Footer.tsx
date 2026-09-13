import './Footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container bar">
                <p>&copy; {new Date().getFullYear()} Nills Maillet</p>
                <ul>
                    <li><a href="https://www.linkedin.com/in/nills-maillet-9299a9382" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/maillet-nills" target="_blank" rel="noreferrer">GitHub</a></li>
                    <li><a href="mailto:mailletnills@gmail.com">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}