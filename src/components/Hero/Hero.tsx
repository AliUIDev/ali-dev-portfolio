import "./Hero.scss";
import profileImg from "../../assets/images/my_profile_image.png";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__container">
                <div className="hero__content">
                    <p className="hero__eyebrow">Frontend Developer</p>
                    <h1>Hi, I'm Ali Nadirov</h1>
                    <p className="hero__roles">
                        Frontend Developer • Writer • Translator
                    </p>
                    <p className="hero__text">
                        I build modern, responsive websites and user-focused interfaces using JavaScript, React, TypeScript, and modern frontend technologies.

                        Alongside development, I create clear, engaging content and provide translation services, helping businesses communicate effectively across different audiences.
                        My combination of technical and communication skills allows me to contribute to both product development and content creation.
                    </p>

                    <div className="hero__actions">
                        <a className="hero__primary" href="#projects">
                            View Projects
                        </a>

                        <a className="hero__secondary" href="#contact">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__orbit"></div>
                    <div className="hero__circle">
                        <img src={profileImg} alt="Ali Nadirov" className="hero__image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;