import { openingHours, socials } from "../constants";

const Contact = () => {
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
          <h1>Open Every Day</h1>
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
