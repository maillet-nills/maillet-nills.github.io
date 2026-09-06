import './TechWatch.css';

const workflow = [
    {
        step: '01',
        title: 'Collect',
        text: 'Google Alerts, set up with a handful of PQC-related keywords, forwards new research, standards updates, and industry news straight to my inbox as they come out.',
    },
    {
        step: '02',
        title: 'Analyze',
        text: "I have Claude go through the collected articles and score them against a set of relevance criteria I've defined (technical depth, source credibility, novelty), returning a short relevance report.",
    },
    {
        step: '03',
        title: 'Curate',
        text: "I read through the report, open the articles that matter, and keep only what's genuinely worth remembering.",
    },
    {
        step: '04',
        title: 'Document',
        text: "Everything I keep gets logged in a dedicated Obsidian vault, so I end up with a searchable notebook instead of a pile of half-remembered links.",
    },
];

const usefulLinks = [
    {
        label: 'NIST Post-Quantum Cryptography Project',
        detail: 'Official standardization project page.',
        url: 'https://csrc.nist.gov/projects/post-quantum-cryptography',
    },
    {
        label: 'FIPS 203, 204, 205',
        detail: 'The finalized ML-KEM, ML-DSA, and SLH-DSA standards.',
        url: 'https://csrc.nist.gov/pubs/fips/203/final',
    },
    {
        label: 'Serious Cryptography, 2nd Edition',
        detail: 'Jean-Philippe Aumasson — my current foundational read.',
        url: 'https://nostarch.com/serious-cryptography-2nd-edition',
    },
    {
        label: 'Google Alerts',
        detail: 'How I collect new PQC news as it happens.',
        url: 'https://www.google.com/alerts',
    },
];

const spotlight = {
    date: 'September 2026',
    title: 'NIST FIPS 203, 204, 205 — standardization',
    source: 'NIST',
    text: "NIST finalized the first post-quantum cryptography standards: ML-KEM (key encapsulation, formerly Kyber), ML-DSA (digital signatures, formerly Dilithium), and SLH-DSA (stateless hash-based signatures, formerly SPHINCS+).",
    whyItMatters: "This is the moment PQC stopped being theoretical for me — these are now the concrete algorithms any real migration plan has to target.",
    tags: ['ML-KEM', 'ML-DSA', 'SLH-DSA'],
    url: 'https://csrc.nist.gov/pubs/fips/203/final',
};

// Remplace cet objet à chaque fois qu'un nouvel article te marque

export default function TechWatch() {
    return (
        <>
            <section className="container intro">
                <p className="eyebrow">Tech watch</p>
                <h1>Post-quantum cryptography</h1>
            </section>

            <section className="container topic">
                <h2 className="section-title">What is post-quantum cryptography?</h2>
                <div className="topic-grid">
                    <p className="section-text">
                        Post-quantum cryptography is about building encryption that can
                        hold up even against a quantum computer. Right now, most of our
                        digital security, RSA, ECC, relies on math problems that are hard
                        for a classical computer but would become almost trivial for a
                        sufficiently powerful quantum one. That's why this matters: the
                        encryption protecting data today needs to be replaced before that
                        kind of computer actually exists, not after. It's one of the
                        reasons I find this field genuinely exciting rather than just
                        theoretical. Following it closely also pulled me into cryptography
                        more broadly.
                    </p>
                    <aside className="reading-card">
                        <p className="reading-label">Currently reading</p>
                        <p className="reading-title">Serious Cryptography, 2nd Edition</p>
                        <p className="reading-author">Jean-Philippe Aumasson</p>
                        <p className="reading-note">
                            Building a proper cryptography foundation before going deeper
                            into PQC-specific constructions.
                        </p>
                    </aside>
                </div>
            </section>

            <section className="container methodology">
                <h2 className="section-title">How I stay on top of it</h2>
                <p className="section-text">
                    My tech watch runs as a small pipeline rather than a habit of
                    randomly browsing articles, from collecting raw sources to a
                    documented, searchable log.
                </p>

                <div className="workflow-grid">
                    {workflow.map((item) => (
                        <div className="workflow-step" key={item.step}>
                            <span className="workflow-number">{item.step}</span>
                            <div>
                                <p className="workflow-title">{item.title}</p>
                                <p className="workflow-text">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="obsidian-block">
                    <div className="obsidian-shot">
                        <img
                            src="/assets/vault-preview.png"
                            alt="My Obsidian vault used to log post-quantum cryptography tech watch notes"
                            loading="lazy"
                        />
                    </div>
                    <div className="obsidian-caption">
                        <p>Every kept article ends up logged and cross-linked in this vault and every modification is uploaded
                            each week.</p>
                        <a
                            className="vault-link"
                            href="https://drive.google.com/drive/folders/1fYLpUNyom1N2A93T1XYzG4XbJ457KwSh?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Browse the vault
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="container methodology">
                <h2 className="section-title">Useful links</h2>
                <div className="links-grid">
                    {usefulLinks.map((link) => {
                        return (
                            <a
                                className="link-item"
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div>
                                    <p className="link-label">{link.label}</p>
                                    <p className="link-detail">{link.detail}</p>
                                </div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="7" y1="17" x2="17" y2="7" />
                                    <polyline points="7 7 17 7 17 17" />
                                </svg>
                            </a>
                        );
                    })}
                </div>
            </section>

            <section className="container spotlight-section">
                <h2 className="section-title">What caught my eye</h2>
                <article className="spotlight">
                    <div className="spotlight-main">
                        <p className="spotlight-date">{spotlight.date} · {spotlight.source}</p>
                        <h3>{spotlight.title}</h3>
                        <p className="spotlight-text">{spotlight.text}</p>
                        <p className="spotlight-why">
                            <span>Why it matters:</span> {spotlight.whyItMatters}
                        </p>
                    </div>
                    <div className="spotlight-meta">
                        <div className="tags">
                            {spotlight.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                        <a className="spotlight-link" href={spotlight.url} target="_blank" rel="noreferrer">
                            Read the source
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                            </svg>
                        </a>
                    </div>
                </article>
            </section>
        </>
    );
}