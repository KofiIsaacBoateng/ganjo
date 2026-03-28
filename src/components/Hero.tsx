import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          className="left-leaf"
          alt="left leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          className="right-leaf"
          alt="right leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisps. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes - designed to delight your
              senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          src="/videos/output.mp4"
          playsInline
          muted
          preload="auto"
          ref={videoRef}
        />
      </div>
    </>
  );
};

export default Hero;
