import SelfPic from './SelfPic.jpg';
import './AboutMe.css';

const AboutME = () => {
    return ( 
        <>
            <h1 className="Headers" id="AboutMe">ABOUT ME</h1>
            <br/>
            <img src={SelfPic} alt="" className='SelfPic'/>
            <p className="summary"><span className="blur">I am a Junior</span> <span className='Highlight'>Computer Science</span> major student at <span className='Highlight'>Arizona State University</span>, specializing in <span className='Highlight'>Full-Stack Development</span> and <span className='Highlight'>Software Engineering</span>. With a strong focus on <span className='Highlight'>Machine Learning</span>, I combine my technical skills with a passion for innovation. I am eager to leverage cutting-edge technologies and deliver impactful solutions, aiming to make significant contributions in the tech industry.</p>
        </>
     );
}
 
export default AboutME;