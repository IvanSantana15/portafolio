import { Button, Card } from "react-bootstrap";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaGit, FaGitAlt, FaLaptopMedical, FaLaptop, FaMobile, FaDatabase } from "react-icons/fa";
import SkillCard from "./SkillCard";
//justify-content-center
export const Skills = ({textContent}) => {

  const {
    h2,
    htmlCard,
    cssCard,
    javascriptCard,
    reactCard,
    typescriptCard,
    boostrapCard,
    csharpCard,
    netCard,
    gitCard,
    responsiveCard,
    sqlCard
  } = textContent

  return (
    <section id="skills" className="skill container  text-center  py-5 shadow  rounded">
      <h2 className="">{h2}</h2>
      <div className="row w-100 d-flex justify-content-center flex-column align-items-center">
        <div className=" skill-container col-md-7 p-3 my-5">


          <SkillCard
            title={htmlCard.title}
            icon={<FaHtml5 className=" fs-1" style={{ color: "red" }} />}
           levelText={ htmlCard.levelText}
            level={htmlCard.levelValue}
          />

          <SkillCard
            title={cssCard.title}
            description={"Domnio del css"}
            icon={<FaCss3 className=" fs-1" style={{ color: "blue" }} />}
            levelText={ htmlCard.levelText}
            level={cssCard.levelValue}
          />

          <SkillCard
            title={javascriptCard.title}
            description={"Dominio de javascript"}
            icon={<FaJs className=" fs-1 " style={{ color: "yellow" }} />}
            levelText={ htmlCard.levelText}
            level={javascriptCard.levelValue}
          />

          <SkillCard
            title={reactCard.title}
            description={"Dominio de react"}
            icon={<FaReact className=" fs-1 text-primary" />}
            levelText={ htmlCard.levelText}
            level={reactCard.levelValue}
          />

          <SkillCard
            title={typescriptCard.title}
            description={"Dominio de Typescript"}
            icon={<span className=" text-white bg-primary" style={{ fontSize: "1.5rem" }} >TS</span>}
            levelText={ htmlCard.levelText}
            level={typescriptCard.levelValue}
          />

          <SkillCard
            title={boostrapCard.title}
            description={"Dominio de react"}
            icon={<FaBootstrap className=" fs-1 " style={{ color: "#563d7c" }} />}
            levelText={ htmlCard.levelText}
            level={boostrapCard.levelValue}
          />
          <SkillCard
            title={""}
            description={"Dominio de C#"}
            icon={<span style={{ color: "green" }}>C#</span>}
            levelText={ htmlCard.levelText}
            level={csharpCard.levelValue}
          />
          <SkillCard
            title={""}
            description={"Dominio de C#"}
            icon={<span style={{ color: "blue" }}>.NET</span>}
            levelText={ htmlCard.levelText}
            level={netCard.levelValue}
          />

          <SkillCard
            title={gitCard.title}
            description={"Dominio de Git"}
            icon={<FaGitAlt className="fs-1" style={{ color: "red" }} />}
            levelText={ htmlCard.levelText}
            level={gitCard.levelValue}
          />

          <SkillCard
            title={responsiveCard.title}
            description={"Dominio de Git"}
            icon={<span><FaLaptop className="" style={{ color: "red", fontSize:"2rem" }} />
                        <FaMobile className="" style={{ color: "red", fontSize:"2rem"}} /></span>}
            levelText={ htmlCard.levelText}
            level={responsiveCard.levelValue}
          />


            <SkillCard
            title={sqlCard.title}
            description={"Dominio de C#"}
            icon={<FaDatabase className="" style={{ color: "blue", fontSize:"2rem" }}/>}
            levelText={ htmlCard.levelText}
            level={sqlCard.levelValue}
          />



        </div>
      </div>
    </section>
  )
}

export default Skills