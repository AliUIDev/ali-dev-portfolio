import "./AboutContact.scss";

function AboutContact() {
    return (
        <section className="about-contact">
            <div className="about-contact__container">
                <div className="about-contact__card" id="about">
                    <p className="about-contact__eyebrow">About</p>
                    <h2>Who I Am</h2>
                    <p>
                        I'm a Frontend Developer passionate about building clean, responsive, and
                        user-friendly web applications with React, TypeScript, and modern frontend technologies.
                        Alongside frontend development, I enjoy creating UI concepts, branding, and marketing visuals,
                        combining technical implementation with creative thinking. I continuously expand my skills by building
                        practical projects and exploring new technologies to create intuitive, high-quality digital experiences.
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
                            <a href="https://github.com/AliUIDev" target="_blank" rel="noreferrer">
                                AliUIDev
                            </a>
                        </li>
                        <li>
                            LinkedIn:{" "}
                            <a href="https://www.linkedin.com/in/ali-nadirov/" target="_blank" rel="noreferrer">
                                View Profile
                            </a>
                        </li>
                        <li>
                            Resume:{" "}
                            <a
                                href="/files/Ali_Nadirov_Frontend_Developer_Resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutContact;