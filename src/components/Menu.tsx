import { useRef, useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef(null);

  const goToSlide = (index: number): void => {
    setCurrentIndex((index + sliderLists.length) % sliderLists.length);
  };

  const getCocktailAt = (indexOffset: number) => {
    return sliderLists[
      (currentIndex + indexOffset + sliderLists.length) % sliderLists.length
    ];
  };

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -100 },
      { opacity: 1, xPercent: 0, duration: 1 },
    );
    gsap.fromTo(
      ".details h2, .details p",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
    );
  }, [currentIndex]);

  const currentCocktail = getCocktailAt(0);
  const nextCocktail = getCocktailAt(1);
  const prevCocktail = getCocktailAt(-1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="mehu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-labelledby="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right arrow"
              aria-hidden={true}
            />
          </button>

          <button
            className="text-right"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left arrow"
              aria-hidden={true}
            />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        <div className="recipe">
          <div className="info" ref={contentRef}>
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
