import { dataHeader } from "../lib/pl_PL";
import "../styles/header.css";
import "../styles/header__btn.css";

function Header() {
  return (
    <section className="header">
      <h1>
        <div className="header__name">
          <span className="gradient">{"< "}Michał</span>
          <span>Nowak{" />"}</span>
        </div>

        <div className="header__title">
          <p>Front-end Developer</p>
        </div>
      </h1>

      <a class="header__btn" href="#aboutme">
        <span></span>About me
      </a>
    </section>
  );
}

export default Header;
