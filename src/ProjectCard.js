import './ProjectCard.css';

const ProjectCard = (props) => {
    return (
        <div className ={`CardContainer ${props.className}`}> 
        <div className="ProjectCard">
            <div className='ImageContainer' style={{backgroundImage: `url(${props.ImageURL})`}}></div>
            <div className='TextualArea'>
                <span className='ProjectName'>{props.Name}</span>
                <p className='ProjectDescription'>{props.Description}</p>
            </div>
        </div>
        <div className='Details'>
            <p className='LongDescription'>{props.LongDescription}</p>
            <a href='None'>Go to Project -></a>
        </div>
        </div>
    );
}
 
export default ProjectCard;