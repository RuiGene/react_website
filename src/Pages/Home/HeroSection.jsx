export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title">Hey, I'm Daniel</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Full Stack 
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum, dolor sit amet consectetu
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <button className="btn btn-primary">Get in touch</button>
            </div>
        </section>
    )
    ;
}