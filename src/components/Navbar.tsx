import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const tween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
      yoyo: true,
    });

    tween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000020",
        backdropFilter: "blur(5px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex-center gap-2">
          <img src="/images/logo.png" alt="logo" className="img" />
          <p>Ganjo</p>
        </a>

        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
