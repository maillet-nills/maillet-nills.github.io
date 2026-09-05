import './About.css';

const photos = [
    { src: 'src/assets/photo-1.jpg', alt: 'Water monitor lizard on a lotus leaf' },
    { src: 'src/assets/photo-2.jpg', alt: 'Stork wading in still water' },
    { src: 'src/assets/photo-3.jpg', alt: 'Portrait of a monkey' },
];

const calligraphyPhotos = [
    { src: 'src/assets/calligraphy-1.jpg', alt: 'Japanese characters written in ink' },
    { src: 'src/assets/calligraphy-2.jpg', alt: 'Japanese characters written in ink' },
    { src: 'src/assets/calligraphy-3.jpg', alt: 'Japanese characters written in ink' },
];

export default function About() {
    return (
        <>
            <section className="container intro">
                <p className="eyebrow">About me</p>
                <h1>More than a dev profile</h1>
                <p className="lede">
                    What connects the way I take photos, learn a language, or read a
                    book is the same instinct : paying close attention, and taking time
                    over things.
                </p>
            </section>

            <section className="container photography">
                <h2 className="section-title">Photography</h2>
                <p className="section-text">
                    Photography is one of the arts I care about most, because it lets
                    me show how I see things instead of just describing them. A frame,
                    a moment of light, a subject caught off guard, it says something
                    words often can't. I shoot with a Sony A6400 and edit and retouch
                    my photos in Adobe Lightroom and Photoshop. I had the beautiful opportunity
                    of making a paid photoshoot for a private individual in the traditional
                    Toulouse's japanese garden.
                </p>
                <div className="photo-grid">
                    {photos.map((photo) => (
                        <img key={photo.src} className="photo" src={photo.src} alt={photo.alt} loading="lazy" />
                    ))}
                </div>
                <p className="photo-caption">
                    Shot during a month traveling through Thailand. I mostly specialize in portraits.
                </p>
            </section>

            <section className="container video">
                <h2 className="section-title">Video editing</h2>
                <p className="section-text">
                    I edit in DaVinci Resolve and I am familiar with Adobe Premiere Pro
                    environment, using the same Sony A6400 footage I shoot my photos
                    with. It's where the patience from photography and the structure
                    from code meet, organizing hours of footage into something worth
                    watching.
                </p>
                <div
                    className="video-shot"
                    style={{ backgroundImage: "url('src/assets/davinci.png')" }}
                />
            </section>

            <section className="container calligraphy">
                <h2 className="section-title">Calligraphy &amp; languages</h2>
                <p className="section-text">
                    No challenge really scares me, that's part of why I started
                    learning Japanese and other languages. I am fluent in french and english,
                    and I have an intermediate level in japanese. I studied in university and have
                    a degree specialized in Japan's culture, literature, society and history.
                    Traveling, understanding a culture, and actually
                    being able to talk to people matter more to me than ticking a box
                    on a CV. Calligraphy is where that patience becomes physical : every
                    stroke has to be deliberate, there's no correcting it afterward.
                </p>
                <div className="photo-grid">
                    {calligraphyPhotos.map((photo) => (
                        <img key={photo.src} className="photo" src={photo.src} alt={photo.alt} loading="lazy" />
                    ))}
                </div>
                <p className="photo-caption">
                    Practice sheets from learning Japanese characters and calligraphy.
                </p>
            </section>

            <section className="container reading">
                <div>
                    <h2 className="section-title">Reading</h2>
                    <p className="section-text">
                        Discovering the author Yōko Ogawa (<span className="jp-text">小川洋子</span>)
                        was my way into this passion. She writes about quiet, heavy subjects with real restraint,
                        the kind of book I come back to, not just finish. I'm also a longtime fan of
                        Tolkien's world, currently making my way through The Lord of the Rings.
                        That's what inspired the name of{' '} <em>Lothlórien GUI - Home Garden Manager</em>.
                    </p>
                </div>
                <div className="reading-shot"
                style={{ backgroundImage: "url('src/assets/reading-shot.jpg')" }}
                >

                </div>
            </section>
        </>
    );
}