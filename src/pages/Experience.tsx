import './Experience.css';

const internship = {
    period: 'May to June 2026',
    type: 'Internship (BTS SIO)',
    role: 'Network Technician',
    company: 'SNS Solutions',
    companyDesc: 'IT managed services provider supporting SME clients across networking, security, and cloud infrastructure.',
    context: 'Five weeks split between day-to-day client support and two infrastructure projects: a UniFi controller migration and an automated Windows deployment server.',
    missions: [
        'Migrated a UniFi controller from a failing Raspberry Pi to a Docker-based setup on a mini PC, restoring the full configuration from a backup.',
        'Built a Proxmox VE hypervisor on a recycled Dell PowerEdge R510, hosting a Windows Server VM running MDT and WDS for automated PXE deployment.',
        'Handled client tickets and on-site work: GPO and RDP certificates, backup failures (Cove Data Protection), printers, and hardware audits.',
    ],
    tools: ['Proxmox VE', 'Docker', 'UniFi Controller', 'MDT / WDS', 'Windows Server', 'Group Policy', 'Tactical RMM'],
    takeaway: "This is where infrastructure stopped being theoretical. I broke things, fixed them, and learned to read logs instead of guessing.",
    photo: '/assets/experience-intern.webp',
};

const job = {
    period: 'July to August 2026',
    type: 'Fixed-term contract (CDD)',
    role: 'Network Technician',
    company: 'SNS Solutions',
    companyDesc: 'IT managed services provider supporting SME clients across networking, security, and cloud infrastructure.',
    context: "Brought back to keep supporting the same client base, this time with more autonomy and direct ticket ownership instead of working alongside a mentor.",
    missions: [
        'Provided N1-N2 support for SME clients: ticket resolution, Stormshield firewall configuration, and VPN setup.',
        'Administered hosted VoIP (3CX) and managed OVH Cloud infrastructure for client environments.',
        'Handled endpoint security deployment and monitoring across client fleets via ESET.',
        'Took part in the weekly Friday tech meeting, reviewing the status of each agency with the team.',
    ],
    tools: ['Ticket management', 'Stormshield', 'VPN', 'OVH Cloud', '3CX', 'Sewan', 'Unyc', 'Eset'],
    takeaway: "This is where I first had to own a problem end-to-end, from a client's first message to a resolved ticket, without someone checking every step.",
    photo: '/assets/experience-job.webp',
};

const documents = [
    { label: 'Download full CV (PDF)', href: '/assets/cv-nills-maillet.pdf' },
    { label: 'Download internship report (PDF, in French)', href: '/assets/rapport-stage-nills-maillet.pdf' },
];

function DownloadIcon() {
    return (
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
    );
}

function PhaseVisual({ photo }: { photo: string }) {
    return (
        <div className="phase-visual">
            <div className="phase-photo" style={{ backgroundImage: `url(${photo})` }} />
        </div>
    );
}

export default function Experience() {
    return (
        <>
            <section className="container intro">
                <p className="eyebrow">Experience</p>
                <h1>From internship to the team</h1>
                <p className="lede">
                    Two placements at the same company, two months apart, not a
                    coincidence, but a direct result of the first one.
                </p>
            </section>

            <section className="container journey">
                <article className="journey-phase">
                    <PhaseVisual photo={internship.photo} />
                    <div className="phase-content">
                        <p className="experience-detail-period">{internship.period}</p>
                        <h2>{internship.role}</h2>
                        <p className="experience-detail-company">
                            {internship.company} <span>· {internship.type}</span>
                        </p>

                        <p className="experience-detail-company-desc">{internship.companyDesc}</p>
                        <p className="experience-detail-context">{internship.context}</p>

                        <ul className="experience-detail-missions">
                            {internship.missions.map((mission) => (
                                <li key={mission}>{mission}</li>
                            ))}
                        </ul>

                        <div className="experience-detail-tags">
                            {internship.tools.map((tool) => (
                                <span className="tag" key={tool}>{tool}</span>
                            ))}
                        </div>

                        <p className="experience-detail-takeaway">
                            <span>What I took from it:</span> {internship.takeaway}
                        </p>
                    </div>
                </article>

                <div className="journey-bridge">
                    <svg
                        className="journey-bridge-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                    </svg>
                    <p>
                        A few weeks after the internship wrapped up, SNS Solutions
                        offered me a fixed-term contract to keep supporting their
                        clients, this time as a full member of the team rather than
                        just an intern.
                    </p>
                </div>

                <article className="journey-phase reverse">
                    <PhaseVisual photo={job.photo} />
                    <div className="phase-content">
                        <p className="experience-detail-period">{job.period}</p>
                        <h2>{job.role}</h2>
                        <p className="experience-detail-company">
                            {job.company} <span>· {job.type}</span>
                        </p>

                        <p className="experience-detail-company-desc">{job.companyDesc}</p>
                        <p className="experience-detail-context">{job.context}</p>

                        <ul className="experience-detail-missions">
                            {job.missions.map((mission) => (
                                <li key={mission}>{mission}</li>
                            ))}
                        </ul>

                        <div className="experience-detail-tags">
                            {job.tools.map((tool) => (
                                <span className="tag" key={tool}>{tool}</span>
                            ))}
                        </div>

                        <p className="experience-detail-takeaway">
                            <span>What I took from it:</span> {job.takeaway}
                        </p>
                    </div>
                </article>
            </section>

            <section className="container cv-section">
                {documents.map((doc) => (
                    <a
                        className="cv-link"
                        key={doc.href}
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        <DownloadIcon />
                        {doc.label}
                    </a>
                ))}
            </section>
        </>
    );
}