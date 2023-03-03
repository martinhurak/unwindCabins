import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar ,faStarHalf} from '@fortawesome/free-solid-svg-icons'
import SearchBar from './Search-bar'

export default function HeroSection(){
    return (<section className="hero--wrap">
        <div className="hero--section-left">

        </div>
        <div className="hero--section-right">

        </div>
        <div className="hero--section-cover">
            <article className="hero--section-article">
                <div className="hero--section-header">
                    <span>Leave the office behind and </span>
                    <span>unwind</span>
                </div>
                <p className='hero--section-fullDescribe'>Welcome to our cozy cabin nestled in the heart of the mountains! Our cabin is the perfect getaway for those seeking peace and relaxation in a natural setting.</p>
                <p className='hero--section-mobileDescribe'>Welcome to our cozy cabin nestled in the heart of the mountains! </p>
                <div className='hero-section-rewiew'>
                    <div className="hero--section-imgContainer">
                        <img src={require("../img/rewiews/rew-image1.png")} alt="rew-img1"/>
                        <img src={require("../img/rewiews/rew-image2.png")} alt="rew-img2"/>
                        <img src={require("../img/rewiews/rew-image3.png")} alt="rew-img3"/>
                        <img src={require("../img/rewiews/rew-image4.png")} alt="rew-img3"/>
                        <img src={require("../img/rewiews/rew-image5.png")} alt="rew-img3"/>
                    </div>
                    <div className='trustPilot-container'>
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <span>Trustpilot</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                            <span>4.5/5</span> 
                        </div>
                    </div>
                    
                </div>
            </article>
        </div>
        <SearchBar/>
    </section>)
}

/*<div className="hero--wrap">
            
        </div>
        <p>Welcome to our cozy cabin nestled in the heart of the mountains! Our cabin is the perfect getaway for those seeking peace and relaxation in a natural setting.</p>*/