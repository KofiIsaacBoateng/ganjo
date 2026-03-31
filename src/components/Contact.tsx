import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const titleSplit = new SplitText(".content h2", { type: "words" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top 50%",
      },
      ease: "power1.inOut",
    });

    tl.from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      stagger: 0.1,
    })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 20,
        duration: 1,
        stagger: 0.2,
      })
      .to("#f-right-leaf", {
        xPercent: 10,
        yPercent: -50,
        duration: 1,
      })
      .to(
        "#f-left-leaf",
        {
          xPercent: -10,
          yPercent: 50,
          duration: 1,
        },
        "<",
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd, #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>+233505518102</p>
          <p>kofiisaacboateng@gmail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((day, index) => (
            <p key={index}>
              {day.day}: {day.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
