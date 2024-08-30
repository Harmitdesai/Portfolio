import './Skills.css';



const Skills = () => {
    return ( 
        <>
            <h1 className="Headers" id="Skills">SKILLS</h1>
            <div className='SkillGroups' id='skill-1'>
                <p className='SkillHeader'>Programming Languages</p>
                <p>C/C++</p>
                <p>JavaScript/TypeScript</p>
                <p>Java</p>
                <p>Python</p>
            </div>
            <div className='SkillGroups' id='skill-2'>
                <p className='SkillHeader'>Web Development</p>
                <p>MongoDB</p>
                <p>Express.js</p>
                <p>React.js</p>
                <p>Node.js</p>
                <p>Firebase</p>
                <p>SQL</p>
            </div>
            <div className='SkillGroups' id='skill-3'>
                <p className='SkillHeader'>Machine Learning/Deep Learning</p>
                <p>Pytorch</p>
                <p>Pandas</p>
                <p>Sci-kit</p>
                <p>HuggingFace</p>
                <p>Diffusers Library</p>
                <p>Transformers Library</p>
                <p>Generative Models</p>
                <p>GANs,SDXLs,VAEs</p>
            </div>
            <div className='SkillGroups' id='skill-4'>
                <p className='SkillHeader'>PromptEngineering</p>
                <p>LangChain</p>
                <p>PineCone</p>
            </div>
            <div className='SkillGroups' id='skill-5'>
                <p className='SkillHeader'>Other Skills</p>
                <p>GitHub</p>
                <p>Jira</p>
                <p>Figma</p>
            </div>
        </>
     );
}
 
export default Skills;