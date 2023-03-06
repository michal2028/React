import "../styles/slider.css";
import "../img/myphoto.jpg";
import "../styles/header__btn.css";
import TextAnimation from "react-text-animations";

const AnimatedText = () => {
  return (
    <TextAnimation.Scale
      target="Front-end"
      text={["Front-end", "Back-end", "Design"]}
      animation={{
        duration: 2000,
        delay: 3000,
        timingFunction: "ease-out",
      }}
    >
      Front-end
    </TextAnimation.Scale>
  );
};

const Slider = () => {
  return (
    <section className="slider">
      <div className="slider__text">
        <h2>
          Michał Nowak
        </h2>
        <h3>
          <p>
            {/* animated Text */}
            <AnimatedText />
          </p>
          <p>
          Developer</p>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          reiciendis incidunt omnis libero{" "}
        </p>
        <div className="slider__btn">
          <a class="header__btn" href="#">
            Contact
          </a>
          <a class="slider__btn-project" href="#">
            Projects
          </a>
        </div>
        <div className="slider__icons">
          <a href="#">
            <div class="github-icon" alt="github icon"></div>
          </a>
          <a href="#">
            <div class="email-icon" alt="email icon"></div>
          </a>
        </div>
      </div>

      <div className="slider__photo">
        <div className="photo"></div>
      </div>
    </section>
  );
};

export default Slider;
