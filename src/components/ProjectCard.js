import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProjectCard = ({projectImg, projectTitle, projectDescription,projectRepoLink, projectDemoLink, gitHubBtn,
  demoBtn }) => {

  
    return (
      
        <Card style={{ width: '45rem' }}
        className="mw-100 my-4 bg-dark"
        >
          <Card.Img variant="top" src={projectImg} />
          <Card.Body>
            <Card.Title>{projectTitle}</Card.Title>
            <Card.Text>
              {projectDescription}
            </Card.Text>
            <Button variant="outline-warning" className="my-2 mx-5" onClick={()=>{ window.open(projectDemoLink,'_blank')  }}>{demoBtn}</Button>
            <Button variant="outline-warning" className=" my-2 mx-5"onClick={()=>{ window.open(projectRepoLink,'_blank')  }}>{gitHubBtn}</Button>
          </Card.Body>
        </Card>
      );
    }
    
  

export default ProjectCard