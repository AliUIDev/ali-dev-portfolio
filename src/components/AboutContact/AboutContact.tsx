import "./AboutContact.scss";

function AboutContact() {
    return (
        <section className="about-contact">
            <div className="about-contact__container">
                <div className="about-contact__card" id="about">
                    <p className="about-contact__eyebrow">About</p>
                    <h2>Who I Am</h2>
                    <p>
                        I'm a frontend developer specializing in clean, user-focused interfaces and modern web design.

                        Beyond development, I provide content writing and English-Turkish translation services, helping 
                        clients present ideas clearly and professionally. I continuously expand my language skills by 
                        learning new languages, allowing me to work across a wider range of projects and clients.
                    </p>
                </div>

                <div className="about-contact__card" id="contact">
                    <p className="about-contact__eyebrow">Contact</p>
                    <h2>Let's Work Together</h2>
                    <ul>
                        <li>
                            Email: <a href="mailto:ali.nadirov.dev@gmail.com">ali.nadirov.dev@gmail.com</a>
                        </li>
                        <li>
                            GitHub:{" "}
                            <a href="https://github.com/AliNadirov" target="_blank" rel="noreferrer">
                                github.com/AliNadirov
                            </a>
                        </li>
                        <li>
                            Freelancer:{" "}
                            <a href="https://www.freelancer.com/u/Tolenor" target="_blank" rel="noreferrer">
                                View Profile
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutContact;