import Hero from '../components/Hero';
import './Home.css';

const experience = [
    {
        role: 'Network Technician (Fixed-term contract)',
        place: 'SNS Solutions, IT services company',
        period: 'July — August 2026',
        missions: [
            'Provided N1-N2 support for SME clients: ticket resolution, Stormshield firewall configuration, and VPN setup.',
            'Administered hosted VoIP (3CX) and managed OVH Cloud infrastructure for client environments.',
            'Handled endpoint security deployment and monitoring across client fleets via ESET.',
        ],
        tools: ['Ticket management', 'Stormshield', 'VPN', 'OVH Cloud', '3CX', 'Sewan', 'Unyc', 'Eset'],
    },
    {
        role: 'Network Technician (Internship)',
        place: 'SNS Solutions, IT services company',
        period: 'May — June 2026',
        missions: [
            'Deployed and configured a Proxmox VE server on a Dell PowerEdge R510, migrating existing services via KVM/virt-manager.',
            'Set up automated OS deployment (MDT/WDS/PXE) for a fleet of client machines.',
            'Administered a UniFi network through a Docker-based Controller and diagnosed backup failures (Cove Data Protection/VSS).',
        ],
        tools: ['Deployment server', 'UniFi Controller', 'Docker', 'Proxmox VE', 'Windows Server'],
    },
];

const projects = [
    {
        title: "L'Herbier des Mots",
        description: 'Fictional bar website built to learn PHP and MySQL from the ground up.',
        stack: 'PHP, MySQL, Bootstrap',
        link: 'https://github.com/maillet-nills/BTS-SIO-LHerbier-Des-Mots?utm_source=chatgpt.com',
    },
    {
        title: 'Lothlórien GUI',
        description: 'Lothlórien is a cross-platform desktop application for managing a home garden.',
        stack: 'C#, Avalonia UI',
        link: 'https://github.com/maillet-nills/LothlorienGUI',
    },
    {
        title: 'Personal portfolio',
        description: 'This website, made with the React framework and pure CSS.',
        stack: 'ReactJS',
        link: 'https://github.com/maillet-nills/maillet-nills.github.io',
    },
];

const currentFocus = [
    {
        label: 'Secure Coding training (Semgrep Academy)',
        detail: "Learning secure coding practices and static analysis (SAST) through Semgrep's training platform. Semgrep is a widely used open-source static analysis tool for catching security vulnerabilities in code.",
        link: 'https://academy.semgrep.dev/',
        linkLabel: 'Semgrep Academy',
    },
    {
        label: 'Post-quantum cryptography watch',
        detail: 'Following NIST FIPS 203/204/205 (ML-KEM, ML-DSA, SLH-DSA).',
        link: 'https://drive.google.com/drive/folders/1fYLpUNyom1N2A93T1XYzG4XbJ457KwSh?usp=drive_link',
        linkLabel: 'See my tech watch',
    }
];

export default function Home() {
    return (
        <>
            <Hero />

            <section className="container section">
                <h2 className="section-title">Projects</h2>
                <div className="grid">
                    {projects.map((project) => (
                        <a key={project.title} className="card project" href={project.link} target="_blank" rel="noreferrer">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p className="stack">{project.stack}</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="container section">
                <h2 className="section-title">What I'm currently working on</h2>

                <div className="firepit">
                    <div className="firepit-main">
                        <h3>Firepit</h3>
                        <p>
                            A personal, introspective reading journal for Android. The name
                            comes from a small personal expression, something
                            closer to warmth and comfort than performance. Firepit is
                            deliberately not a social network, not a discovery engine, and not
                            built around competition or sharing, it's a quiet tool to log and
                            reflect on what I'm reading, nothing more.
                        </p>
                        <p>
                            The MVP covers a library (books sorted into To read / Reading /
                            Finished / Wishlist), reading logs tied to a calendar with duration
                            and comments, and basic stats on what I've read. Book data comes
                            from the Google Books API, with Open Library as a fallback.
                        </p>
                    </div>
                    <div className="firepit-meta">
                        <div>
                            <p className="firepit-meta-label">Status</p>
                            <p className="firepit-meta-value">Phase 0 : foundations</p>
                        </div>
                        <div>
                            <p className="firepit-meta-label">Stack</p>
                            <p className="firepit-meta-value">Kotlin, Jetpack Compose, Room, MVVM</p>
                        </div>
                        <div>
                            <p className="firepit-meta-label">Platform</p>
                            <p className="firepit-meta-value">Android</p>
                        </div>
                    </div>
                </div>

                <div className="focus-list">
                    {currentFocus.map((item) => (
                        <div className="focus-item" key={item.label}>
                            <span className="focus-dot" />
                            <div>
                                <p className="focus-label">
                                    {item.label}
                                    {item.link && (
                                        <>
                                            {' — '}
                                            <a href={item.link} target="_blank" rel="noreferrer">{item.linkLabel}</a>
                                        </>
                                    )}
                                </p>
                                <p className="focus-detail">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container section">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                    {experience.map((item) => (
                        <div className="experience-item" key={item.role + item.period}>
                            <p className="experience-period">{item.period}</p>
                            <h3>{item.role}</h3>
                            <p className="experience-place">{item.place}</p>
                            <ul className="experience-missions">
                                {item.missions.map((mission) => (
                                    <li key={mission}>{mission}</li>
                                ))}
                            </ul>
                            <div className="experience-tags">
                                {item.tools.map((tool) => (
                                    <span key={tool} className="tag">{tool}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <a className="cv-link" href="public/cv-nills-maillet.pdf" target="_blank" rel="noreferrer" download>
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download full CV (PDF)
                </a>
            </section>

            <section className="container section">
                <h2 className="section-title">Skills</h2>
                <div className="skills">
                    <div>
                        <p className="skills-label">Software</p>
                        <p>Java, C#, Python</p>
                        <p className="skills-label">Web</p>
                        <p>HTML, CSS, ReactJS, PHP,
                            Bootstrap, NodeJS, Wordpress</p>
                        <p className="skills-label">DataBase</p>
                        <p>MySQL, PostgreSQL, MongoDB</p>
                        <p className="skills-label">Network</p>
                        <p>Docker, Stormshield, Proxmox VE, Windows Server, Linux</p>
                    </div>
                    <div>
                        <p className="skills-label">Certificates</p>
                        <p>Introduction to Cybersecurity, Cisco Networking Academy</p>
                        <p>Claude 101, Anthropic Academy</p>
                        <p className="skills-label">What I'm exploring</p>
                        <p>
                            Post-quantum cryptography (ML-KEM, ML-DSA), DevSecOps, {' '}
                            <a href="#/tech-watch">see my PQC tech watch</a>
                        </p>
                        <p className="skills-label">Creative tools</p>
                        <p>Adobe Lightroom, Photoshop, DaVinci Resolve, Figma</p>
                    </div>
                </div>
            </section>
        </>
    );
}