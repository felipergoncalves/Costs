import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from "./Projects.module.css"
import Container from '../layout/Container'
import LinkButton from '../layout/linkButton'
import  ProjectCard from "../project/projectCard"
import { useState, useEffect } from "react"

function Projects(){
    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((error) => console.log(error))
    }, [])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto"/>
            </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category ? project.category.name :'Categoria Indefinida'}
                            key={project.id}
                        />
                    ))}
                <ProjectCard />
            </Container>
        </div>
    )
}

export default Projects