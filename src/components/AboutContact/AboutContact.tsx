import "./AboutContact.scss";

function AboutContact() {
    return (
        <section className="about-contact">
            <div className="about-contact__container">
                <div className="about-contact__card" id="about">
                    <p className="about-contact__eyebrow">About</p>
                    <h2>Who I Am</h2>
                    <p>
                        I'm a Frontend Developer specializing in React, TypeScript, and modern web technologies.
                        I focus on building clean, responsive, and user-friendly interfaces with strong attention
                        to performance, usability, and maintainable code. Through personal projects, I have developed
                        dashboard applications, authentication flows, data visualization features, and scalable
                        component-based architectures. I enjoy turning ideas into intuitive digital experiences while
                        continuously expanding my frontend development skills.
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