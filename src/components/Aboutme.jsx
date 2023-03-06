import "../styles/aboutme.css";

const Aboutme = () => {
  return (
    <section id="aboutme" className="aboutme">
      <div className="aboutme__img">
        <p>IMG</p>
      </div>
      <div className="aboutme__text">
        <h2>About me</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          deleniti.elit. Laudantium, deleniti.
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, dolor.
        </p>
        <div className="aboutme__data">
          <div className="aboutme__data-text">
            <span>4+</span>
            <p>Years of experience in IT</p>
          </div>
          <div className="aboutme__data-text">
            <span>15</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="aboutme__data-text">
            <span>15</span>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="aboutme__btns">
          <a class="header__btn" href="#">
            Contact
          </a>
          <a class="aboutme__btn-project" href="#">
            Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
