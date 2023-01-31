import '../css/App.css'
import StackList from './StackList';

function Hero() {
    return(
        <>
            <div className='splatter'></div>
            <div className='page1'>
                <div className="hero-body">Emerson Ca&#241;a</div>
                <div className="hero-link small">Full Stack Web Developer</div>
                <div className="hero-list">
                    <StackList></StackList>
                </div>
                <div className='button-group'>
                    <button className="custom-button">Hire Me</button>
                    <button className="custom-button">Download CV</button>
                </div>
            </div>
        </>
    )
}

export default Hero;