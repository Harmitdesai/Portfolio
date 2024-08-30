import ProjectCard from './ProjectCard';
import './Project.css';
import BackgroundChanger from './BackgroundChanger.png';
import WeePull from './WeePull.png';
import Furi from './Furi.png';
import Spyn from './Spyn.png';
import { useRef, useEffect } from 'react';

const Project = () => {

    const projectWheelRef = useRef(null);

    useEffect(() => {
        const projectWheel = projectWheelRef.current;

        const handleAnimationIteration = () => {
            const computedStyle = getComputedStyle(projectWheel);
            const transformValue = computedStyle.transform;

            if (transformValue && transformValue !== 'none') {
                const matrix = new DOMMatrix(transformValue);
                let radianAngleY = Math.atan2(matrix.m13, matrix.m11);
                let degreeAngleY = radianAngleY * (180 / Math.PI);
                if (degreeAngleY < 0) {
                    degreeAngleY += 360;
                }
                if (degreeAngleY <= 0.05) { // Or apply the desired styles here
                    projectWheel.style.opacity = 0; // Hide the element
                    projectWheel.style.pointerEvents = 'none';
                } else { // Reset styles
                    projectWheel.style.opacity = 1; // Show the element
                    projectWheel.style.pointerEvents = 'auto';
                }
            }
        };

        const computedStyle = getComputedStyle(projectWheel);
        const animationDuration = parseFloat(computedStyle.animationDuration) * 1000;

        const interval = setInterval(() => {
            handleAnimationIteration();
        }, animationDuration / 2);

        return () => clearInterval(interval);
    }, []);

    return ( 
        <>
            <div className='Projects'>
                <p>PROJECTS</p>
            </div>
            <br></br>
            <div className="ProjectWheel" ref={projectWheelRef}>
                <ProjectCard Name='Background Changer' Description="It uses SDXL and Meta's SAM to chnage background of image with give text" ImageURL={BackgroundChanger} className='p1' LongDescription="In this project I have integrated Meta's SAM model with SDXL. It removes background and using SAM and generates another background where original object can fit using canny images and text description."/>
                <ProjectCard Name='WeePull' Description="A full-stack application which work as search engine for Data" ImageURL={WeePull} className='p2' LongDescription="WeePull is full-stack platform where people can upload all sorts of structured data, and other developers can fetch data according to their requirement. It includes, signup, login page as well. Here users can create mask and add text descriptions of images too. We have developed this platform usin MERN stack and python for integgrating SAM here."/>
                <ProjectCard Name='KRR using Neural Networks' Description="Did research in FURI(Fulton Undergraduate Research Initiative) and develop a theoretical model for neural network which can be used for knowledge representation and reasoning" ImageURL={Furi} className='p3' LongDescription="during my research I develop a theoretical model and summary of architecture for neural network which can take continous input from the environment and learn knowledge of environment."/>
                <ProjectCard Name='Project Spyn' Description="A lego based autonomous vehicle which navigates through maze, finds right spot and is handicapped friendly. " ImageURL={Spyn} className='p4' LongDescription="In this project I build a lego based autonomous vehicle in a team, this car was able to navigate in maze without any other information and it was handicapped friendly, so that this car could easily lift wheelchair and drop it to the right destination."/>
            </div>
        </>
     );
}
 
export default Project;