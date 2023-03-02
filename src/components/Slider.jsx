import '../styles/slider.css'
import '../img/myphoto.jpg'
import '../styles/header__btn.css'



const Slider = () =>{

    return (
        <div className='container'>
            <div className='slider__text'>
                <h2>Michal Nowak</h2>
                <h3>Front-End Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut reiciendis incidunt omnis libero</p>
                <div className="slider__btn">
                <a class="header__btn" href="#">Contact</a>
                <a class="header__btn" href="#">Projects</a>
                    
                </div>
            </div>

            <div className='slider__photo'>
                    <div className="photo">

                    </div>
            </div>


        </div>
    )
}


export default Slider